export enum LogLevel {
	None = -1,
	Message = 0,
	Verbose = 1,
	Event = 2,
	Debug = 3,
	Information = 4,
	Warning = 5,
	Error = 6,
	Fatal = 7
}

export interface Events {
	logLevel: LogLevel,
	text: string,
}

const Prefix: Record<LogLevel, string> =
{
	[LogLevel.None]: '|cffffffff[NON]|r',
	[LogLevel.Verbose]: '|cff9d9d9d[VRB]|r',
	[LogLevel.Debug]: '|cff9d9d9d[DBG]|r',
	[LogLevel.Information]: '|cffe6cc80[INF]|r',
	[LogLevel.Message]: '|cffe6cc80[MSG]|r',
	[LogLevel.Event]: '|cffe6cc80[EVT]|r',
	[LogLevel.Warning]: '|cffffcc00[WRN]|r',
	[LogLevel.Error]: '|cffff8000[ERR]|r',
	[LogLevel.Fatal]: '|cffff0000[FTL]|r'
}

const Colors: Record<string, string> =
{
	nil: '9d9d9d',
	boolean: '1eff00',
	number: '00ccff',
	string: 'ff8000',
	table: 'ffcc00',
	function: 'ffcc00',
	userdata: 'ffcc00'
}

const Brackets: Record<string, boolean> =
{
	nil: false,
	boolean: false,
	number: false,
	string: false,
	table: true,
	function: true,
	userdata: true
}

const log = (logLevel: LogLevel, text: string, ...events: unknown[]) => {
	if (logLevel >= Logger.logLevel) {
		let messagePost = Prefix[logLevel] + ' ' + text

		let parameters = ''

		for (let index = 0; index < events.length; index++) {
			parameters += ' '
			const event = events[index]

			const whichType = type(event)

			const color = Colors[whichType]

			if (color) {
				parameters += '|cff' + color
			}
			if (Brackets[whichType]) {
				parameters += '{ '
			}

			parameters += event

			if (Brackets[whichType]) {
				parameters += ' }'
			}

			if (color) {
				parameters += '|r'
			}
		}

		if (parameters !== ' ') {
			messagePost += ':' + parameters
		}

		print(messagePost)
	}
}

export class Logger {
	static logLevel = LogLevel.None

	static set Level (level: LogLevel) {
		Logger.logLevel = level
	}

	static Fatal = (text: unknown, ...args: unknown[]): void => {
		log(LogLevel.Fatal, text as string, ...args)
	}

	static Error = (text: unknown, ...args: unknown[]): void => {
		log(LogLevel.Error, text as string, ...args)
	}

	static Warning = (text: unknown, ...args: unknown[]): void => {
		log(LogLevel.Warning, text as string, ...args)
	}

	static Information = (text: unknown, ...args: unknown[]): void => {
		log(LogLevel.Information, text as string, ...args)
	}

	static Debug = (text: unknown, ...args: unknown[]): void => {
		log(LogLevel.Debug, text as string, ...args)
	}

	static Message = (text: unknown, ...args: unknown[]): void => {
		log(LogLevel.Message, text as string, ...args)
	}

	static Verbose = (text: unknown, ...args: unknown[]): void => {
		log(LogLevel.Verbose, text as string, ...args)
	}
}
