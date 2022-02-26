/** @noSelfInFile **/

export const HandleMap: WeakMap<handle, any> = new WeakMap<handle, any>()

export class Handle<T extends handle> {
	public readonly handle: T
	protected static initHandle: handle | undefined

	protected constructor (handle?: T) {
		this.handle = handle === undefined ? (Handle.initHandle as T) : handle
		HandleMap.set(this.handle, this)
	}

	/**
   * Get the unique ID of the handle. The ID is recycled once you destroy the object.
   * @returns The unique ID of a handle object.
   */
	public get id (): number {
		return GetHandleId(this.handle)
	}

	protected static initFromHandle (): boolean {
		return Handle.initHandle !== undefined
	}

	protected static getObject (handle: handle) {
		const obj = HandleMap.get(handle)
		if (obj !== undefined) {
			return obj
		}
		Handle.initHandle = handle
		const newObj = new this()
		Handle.initHandle = undefined
		return newObj
	}
}
