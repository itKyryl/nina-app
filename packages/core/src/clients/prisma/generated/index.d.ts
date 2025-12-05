
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ApiAccess
 * 
 */
export type ApiAccess = $Result.DefaultSelection<Prisma.$ApiAccessPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>
/**
 * Model TaskLoop
 * 
 */
export type TaskLoop = $Result.DefaultSelection<Prisma.$TaskLoopPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TrafficSourceAccount
 * 
 */
export type TrafficSourceAccount = $Result.DefaultSelection<Prisma.$TrafficSourceAccountPayload>
/**
 * Model TrafficSourceAccountToTrafficSourceBm
 * 
 */
export type TrafficSourceAccountToTrafficSourceBm = $Result.DefaultSelection<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload>
/**
 * Model TrafficSourceBm
 * 
 */
export type TrafficSourceBm = $Result.DefaultSelection<Prisma.$TrafficSourceBmPayload>
/**
 * Model TrafficSourceBmToApiAccess
 * 
 */
export type TrafficSourceBmToApiAccess = $Result.DefaultSelection<Prisma.$TrafficSourceBmToApiAccessPayload>
/**
 * Model TrafficSourceDailyAdStat
 * 
 */
export type TrafficSourceDailyAdStat = $Result.DefaultSelection<Prisma.$TrafficSourceDailyAdStatPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ApiAccessType: {
  TRAFFIC_SOURCE_SOC: 'TRAFFIC_SOURCE_SOC'
};

export type ApiAccessType = (typeof ApiAccessType)[keyof typeof ApiAccessType]


export const TaskType: {
  COLLECT_TRAFFIC_SOURCE_BMS: 'COLLECT_TRAFFIC_SOURCE_BMS',
  COLLECT_TRAFFIC_SOURCE_ACCOUNTS: 'COLLECT_TRAFFIC_SOURCE_ACCOUNTS',
  COLLECT_TRAFFIC_SOURCE_DAILY_AD_SPEND: 'COLLECT_TRAFFIC_SOURCE_DAILY_AD_SPEND'
};

export type TaskType = (typeof TaskType)[keyof typeof TaskType]


export const TaskStatus: {
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  FAILED: 'FAILED',
  DONE: 'DONE'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const TrafficSourceAccountStatus: {
  ACTIVE: 'ACTIVE',
  BLOCK: 'BLOCK',
  PAYMENT_ERROR: 'PAYMENT_ERROR',
  CLOSING: 'CLOSING',
  EXPIRED: 'EXPIRED'
};

export type TrafficSourceAccountStatus = (typeof TrafficSourceAccountStatus)[keyof typeof TrafficSourceAccountStatus]


export const TrafficSourceType: {
  FACEBOOK: 'FACEBOOK',
  TIKTOK: 'TIKTOK'
};

export type TrafficSourceType = (typeof TrafficSourceType)[keyof typeof TrafficSourceType]

}

export type ApiAccessType = $Enums.ApiAccessType

export const ApiAccessType: typeof $Enums.ApiAccessType

export type TaskType = $Enums.TaskType

export const TaskType: typeof $Enums.TaskType

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type TrafficSourceAccountStatus = $Enums.TrafficSourceAccountStatus

export const TrafficSourceAccountStatus: typeof $Enums.TrafficSourceAccountStatus

export type TrafficSourceType = $Enums.TrafficSourceType

export const TrafficSourceType: typeof $Enums.TrafficSourceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ApiAccesses
 * const apiAccesses = await prisma.apiAccess.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ApiAccesses
   * const apiAccesses = await prisma.apiAccess.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.apiAccess`: Exposes CRUD operations for the **ApiAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiAccesses
    * const apiAccesses = await prisma.apiAccess.findMany()
    * ```
    */
  get apiAccess(): Prisma.ApiAccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskLoop`: Exposes CRUD operations for the **TaskLoop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskLoops
    * const taskLoops = await prisma.taskLoop.findMany()
    * ```
    */
  get taskLoop(): Prisma.TaskLoopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trafficSourceAccount`: Exposes CRUD operations for the **TrafficSourceAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrafficSourceAccounts
    * const trafficSourceAccounts = await prisma.trafficSourceAccount.findMany()
    * ```
    */
  get trafficSourceAccount(): Prisma.TrafficSourceAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trafficSourceAccountToTrafficSourceBm`: Exposes CRUD operations for the **TrafficSourceAccountToTrafficSourceBm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrafficSourceAccountToTrafficSourceBms
    * const trafficSourceAccountToTrafficSourceBms = await prisma.trafficSourceAccountToTrafficSourceBm.findMany()
    * ```
    */
  get trafficSourceAccountToTrafficSourceBm(): Prisma.TrafficSourceAccountToTrafficSourceBmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trafficSourceBm`: Exposes CRUD operations for the **TrafficSourceBm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrafficSourceBms
    * const trafficSourceBms = await prisma.trafficSourceBm.findMany()
    * ```
    */
  get trafficSourceBm(): Prisma.TrafficSourceBmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trafficSourceBmToApiAccess`: Exposes CRUD operations for the **TrafficSourceBmToApiAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrafficSourceBmToApiAccesses
    * const trafficSourceBmToApiAccesses = await prisma.trafficSourceBmToApiAccess.findMany()
    * ```
    */
  get trafficSourceBmToApiAccess(): Prisma.TrafficSourceBmToApiAccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trafficSourceDailyAdStat`: Exposes CRUD operations for the **TrafficSourceDailyAdStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrafficSourceDailyAdStats
    * const trafficSourceDailyAdStats = await prisma.trafficSourceDailyAdStat.findMany()
    * ```
    */
  get trafficSourceDailyAdStat(): Prisma.TrafficSourceDailyAdStatDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ApiAccess: 'ApiAccess',
    Log: 'Log',
    Settings: 'Settings',
    TaskLoop: 'TaskLoop',
    Task: 'Task',
    TrafficSourceAccount: 'TrafficSourceAccount',
    TrafficSourceAccountToTrafficSourceBm: 'TrafficSourceAccountToTrafficSourceBm',
    TrafficSourceBm: 'TrafficSourceBm',
    TrafficSourceBmToApiAccess: 'TrafficSourceBmToApiAccess',
    TrafficSourceDailyAdStat: 'TrafficSourceDailyAdStat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "apiAccess" | "log" | "settings" | "taskLoop" | "task" | "trafficSourceAccount" | "trafficSourceAccountToTrafficSourceBm" | "trafficSourceBm" | "trafficSourceBmToApiAccess" | "trafficSourceDailyAdStat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ApiAccess: {
        payload: Prisma.$ApiAccessPayload<ExtArgs>
        fields: Prisma.ApiAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiAccessPayload>
          }
          findFirst: {
            args: Prisma.ApiAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiAccessPayload>
          }
          findMany: {
            args: Prisma.ApiAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiAccessPayload>[]
          }
          create: {
            args: Prisma.ApiAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiAccessPayload>
          }
          createMany: {
            args: Prisma.ApiAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiAccessPayload>[]
          }
          delete: {
            args: Prisma.ApiAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiAccessPayload>
          }
          update: {
            args: Prisma.ApiAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiAccessPayload>
          }
          deleteMany: {
            args: Prisma.ApiAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiAccessPayload>[]
          }
          upsert: {
            args: Prisma.ApiAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiAccessPayload>
          }
          aggregate: {
            args: Prisma.ApiAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiAccess>
          }
          groupBy: {
            args: Prisma.ApiAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiAccessCountArgs<ExtArgs>
            result: $Utils.Optional<ApiAccessCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      TaskLoop: {
        payload: Prisma.$TaskLoopPayload<ExtArgs>
        fields: Prisma.TaskLoopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskLoopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLoopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskLoopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLoopPayload>
          }
          findFirst: {
            args: Prisma.TaskLoopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLoopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskLoopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLoopPayload>
          }
          findMany: {
            args: Prisma.TaskLoopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLoopPayload>[]
          }
          create: {
            args: Prisma.TaskLoopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLoopPayload>
          }
          createMany: {
            args: Prisma.TaskLoopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskLoopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLoopPayload>[]
          }
          delete: {
            args: Prisma.TaskLoopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLoopPayload>
          }
          update: {
            args: Prisma.TaskLoopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLoopPayload>
          }
          deleteMany: {
            args: Prisma.TaskLoopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskLoopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskLoopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLoopPayload>[]
          }
          upsert: {
            args: Prisma.TaskLoopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLoopPayload>
          }
          aggregate: {
            args: Prisma.TaskLoopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskLoop>
          }
          groupBy: {
            args: Prisma.TaskLoopGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskLoopGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskLoopCountArgs<ExtArgs>
            result: $Utils.Optional<TaskLoopCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TrafficSourceAccount: {
        payload: Prisma.$TrafficSourceAccountPayload<ExtArgs>
        fields: Prisma.TrafficSourceAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrafficSourceAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrafficSourceAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountPayload>
          }
          findFirst: {
            args: Prisma.TrafficSourceAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrafficSourceAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountPayload>
          }
          findMany: {
            args: Prisma.TrafficSourceAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountPayload>[]
          }
          create: {
            args: Prisma.TrafficSourceAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountPayload>
          }
          createMany: {
            args: Prisma.TrafficSourceAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrafficSourceAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountPayload>[]
          }
          delete: {
            args: Prisma.TrafficSourceAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountPayload>
          }
          update: {
            args: Prisma.TrafficSourceAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountPayload>
          }
          deleteMany: {
            args: Prisma.TrafficSourceAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrafficSourceAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrafficSourceAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountPayload>[]
          }
          upsert: {
            args: Prisma.TrafficSourceAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountPayload>
          }
          aggregate: {
            args: Prisma.TrafficSourceAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrafficSourceAccount>
          }
          groupBy: {
            args: Prisma.TrafficSourceAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrafficSourceAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrafficSourceAccountCountArgs<ExtArgs>
            result: $Utils.Optional<TrafficSourceAccountCountAggregateOutputType> | number
          }
        }
      }
      TrafficSourceAccountToTrafficSourceBm: {
        payload: Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>
        fields: Prisma.TrafficSourceAccountToTrafficSourceBmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload>
          }
          findFirst: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload>
          }
          findMany: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload>[]
          }
          create: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload>
          }
          createMany: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload>[]
          }
          delete: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload>
          }
          update: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload>
          }
          deleteMany: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload>[]
          }
          upsert: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload>
          }
          aggregate: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrafficSourceAccountToTrafficSourceBm>
          }
          groupBy: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrafficSourceAccountToTrafficSourceBmGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrafficSourceAccountToTrafficSourceBmCountArgs<ExtArgs>
            result: $Utils.Optional<TrafficSourceAccountToTrafficSourceBmCountAggregateOutputType> | number
          }
        }
      }
      TrafficSourceBm: {
        payload: Prisma.$TrafficSourceBmPayload<ExtArgs>
        fields: Prisma.TrafficSourceBmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrafficSourceBmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrafficSourceBmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmPayload>
          }
          findFirst: {
            args: Prisma.TrafficSourceBmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrafficSourceBmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmPayload>
          }
          findMany: {
            args: Prisma.TrafficSourceBmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmPayload>[]
          }
          create: {
            args: Prisma.TrafficSourceBmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmPayload>
          }
          createMany: {
            args: Prisma.TrafficSourceBmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrafficSourceBmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmPayload>[]
          }
          delete: {
            args: Prisma.TrafficSourceBmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmPayload>
          }
          update: {
            args: Prisma.TrafficSourceBmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmPayload>
          }
          deleteMany: {
            args: Prisma.TrafficSourceBmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrafficSourceBmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrafficSourceBmUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmPayload>[]
          }
          upsert: {
            args: Prisma.TrafficSourceBmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmPayload>
          }
          aggregate: {
            args: Prisma.TrafficSourceBmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrafficSourceBm>
          }
          groupBy: {
            args: Prisma.TrafficSourceBmGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrafficSourceBmGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrafficSourceBmCountArgs<ExtArgs>
            result: $Utils.Optional<TrafficSourceBmCountAggregateOutputType> | number
          }
        }
      }
      TrafficSourceBmToApiAccess: {
        payload: Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>
        fields: Prisma.TrafficSourceBmToApiAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrafficSourceBmToApiAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmToApiAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrafficSourceBmToApiAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmToApiAccessPayload>
          }
          findFirst: {
            args: Prisma.TrafficSourceBmToApiAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmToApiAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrafficSourceBmToApiAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmToApiAccessPayload>
          }
          findMany: {
            args: Prisma.TrafficSourceBmToApiAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmToApiAccessPayload>[]
          }
          create: {
            args: Prisma.TrafficSourceBmToApiAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmToApiAccessPayload>
          }
          createMany: {
            args: Prisma.TrafficSourceBmToApiAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrafficSourceBmToApiAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmToApiAccessPayload>[]
          }
          delete: {
            args: Prisma.TrafficSourceBmToApiAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmToApiAccessPayload>
          }
          update: {
            args: Prisma.TrafficSourceBmToApiAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmToApiAccessPayload>
          }
          deleteMany: {
            args: Prisma.TrafficSourceBmToApiAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrafficSourceBmToApiAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrafficSourceBmToApiAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmToApiAccessPayload>[]
          }
          upsert: {
            args: Prisma.TrafficSourceBmToApiAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceBmToApiAccessPayload>
          }
          aggregate: {
            args: Prisma.TrafficSourceBmToApiAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrafficSourceBmToApiAccess>
          }
          groupBy: {
            args: Prisma.TrafficSourceBmToApiAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrafficSourceBmToApiAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrafficSourceBmToApiAccessCountArgs<ExtArgs>
            result: $Utils.Optional<TrafficSourceBmToApiAccessCountAggregateOutputType> | number
          }
        }
      }
      TrafficSourceDailyAdStat: {
        payload: Prisma.$TrafficSourceDailyAdStatPayload<ExtArgs>
        fields: Prisma.TrafficSourceDailyAdStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrafficSourceDailyAdStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceDailyAdStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrafficSourceDailyAdStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceDailyAdStatPayload>
          }
          findFirst: {
            args: Prisma.TrafficSourceDailyAdStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceDailyAdStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrafficSourceDailyAdStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceDailyAdStatPayload>
          }
          findMany: {
            args: Prisma.TrafficSourceDailyAdStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceDailyAdStatPayload>[]
          }
          create: {
            args: Prisma.TrafficSourceDailyAdStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceDailyAdStatPayload>
          }
          createMany: {
            args: Prisma.TrafficSourceDailyAdStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrafficSourceDailyAdStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceDailyAdStatPayload>[]
          }
          delete: {
            args: Prisma.TrafficSourceDailyAdStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceDailyAdStatPayload>
          }
          update: {
            args: Prisma.TrafficSourceDailyAdStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceDailyAdStatPayload>
          }
          deleteMany: {
            args: Prisma.TrafficSourceDailyAdStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrafficSourceDailyAdStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrafficSourceDailyAdStatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceDailyAdStatPayload>[]
          }
          upsert: {
            args: Prisma.TrafficSourceDailyAdStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficSourceDailyAdStatPayload>
          }
          aggregate: {
            args: Prisma.TrafficSourceDailyAdStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrafficSourceDailyAdStat>
          }
          groupBy: {
            args: Prisma.TrafficSourceDailyAdStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrafficSourceDailyAdStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrafficSourceDailyAdStatCountArgs<ExtArgs>
            result: $Utils.Optional<TrafficSourceDailyAdStatCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    apiAccess?: ApiAccessOmit
    log?: LogOmit
    settings?: SettingsOmit
    taskLoop?: TaskLoopOmit
    task?: TaskOmit
    trafficSourceAccount?: TrafficSourceAccountOmit
    trafficSourceAccountToTrafficSourceBm?: TrafficSourceAccountToTrafficSourceBmOmit
    trafficSourceBm?: TrafficSourceBmOmit
    trafficSourceBmToApiAccess?: TrafficSourceBmToApiAccessOmit
    trafficSourceDailyAdStat?: TrafficSourceDailyAdStatOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ApiAccessCountOutputType
   */

  export type ApiAccessCountOutputType = {
    trafficSourceBmToApiAccessConnections: number
  }

  export type ApiAccessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceBmToApiAccessConnections?: boolean | ApiAccessCountOutputTypeCountTrafficSourceBmToApiAccessConnectionsArgs
  }

  // Custom InputTypes
  /**
   * ApiAccessCountOutputType without action
   */
  export type ApiAccessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiAccessCountOutputType
     */
    select?: ApiAccessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApiAccessCountOutputType without action
   */
  export type ApiAccessCountOutputTypeCountTrafficSourceBmToApiAccessConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrafficSourceBmToApiAccessWhereInput
  }


  /**
   * Count Type TaskLoopCountOutputType
   */

  export type TaskLoopCountOutputType = {
    tasks: number
  }

  export type TaskLoopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TaskLoopCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * TaskLoopCountOutputType without action
   */
  export type TaskLoopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLoopCountOutputType
     */
    select?: TaskLoopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskLoopCountOutputType without action
   */
  export type TaskLoopCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TrafficSourceAccountCountOutputType
   */

  export type TrafficSourceAccountCountOutputType = {
    trafficSourceAccountToTrafficSourceBmConnections: number
    trafficSourceDailyAdStats: number
  }

  export type TrafficSourceAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceAccountToTrafficSourceBmConnections?: boolean | TrafficSourceAccountCountOutputTypeCountTrafficSourceAccountToTrafficSourceBmConnectionsArgs
    trafficSourceDailyAdStats?: boolean | TrafficSourceAccountCountOutputTypeCountTrafficSourceDailyAdStatsArgs
  }

  // Custom InputTypes
  /**
   * TrafficSourceAccountCountOutputType without action
   */
  export type TrafficSourceAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccountCountOutputType
     */
    select?: TrafficSourceAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrafficSourceAccountCountOutputType without action
   */
  export type TrafficSourceAccountCountOutputTypeCountTrafficSourceAccountToTrafficSourceBmConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrafficSourceAccountToTrafficSourceBmWhereInput
  }

  /**
   * TrafficSourceAccountCountOutputType without action
   */
  export type TrafficSourceAccountCountOutputTypeCountTrafficSourceDailyAdStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrafficSourceDailyAdStatWhereInput
  }


  /**
   * Count Type TrafficSourceBmCountOutputType
   */

  export type TrafficSourceBmCountOutputType = {
    trafficSourceBmToApiAccessConnections: number
    trafficSourceAccountToTrafficSourceBmConnections: number
    accountsOwned: number
  }

  export type TrafficSourceBmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceBmToApiAccessConnections?: boolean | TrafficSourceBmCountOutputTypeCountTrafficSourceBmToApiAccessConnectionsArgs
    trafficSourceAccountToTrafficSourceBmConnections?: boolean | TrafficSourceBmCountOutputTypeCountTrafficSourceAccountToTrafficSourceBmConnectionsArgs
    accountsOwned?: boolean | TrafficSourceBmCountOutputTypeCountAccountsOwnedArgs
  }

  // Custom InputTypes
  /**
   * TrafficSourceBmCountOutputType without action
   */
  export type TrafficSourceBmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBmCountOutputType
     */
    select?: TrafficSourceBmCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrafficSourceBmCountOutputType without action
   */
  export type TrafficSourceBmCountOutputTypeCountTrafficSourceBmToApiAccessConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrafficSourceBmToApiAccessWhereInput
  }

  /**
   * TrafficSourceBmCountOutputType without action
   */
  export type TrafficSourceBmCountOutputTypeCountTrafficSourceAccountToTrafficSourceBmConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrafficSourceAccountToTrafficSourceBmWhereInput
  }

  /**
   * TrafficSourceBmCountOutputType without action
   */
  export type TrafficSourceBmCountOutputTypeCountAccountsOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrafficSourceAccountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ApiAccess
   */

  export type AggregateApiAccess = {
    _count: ApiAccessCountAggregateOutputType | null
    _avg: ApiAccessAvgAggregateOutputType | null
    _sum: ApiAccessSumAggregateOutputType | null
    _min: ApiAccessMinAggregateOutputType | null
    _max: ApiAccessMaxAggregateOutputType | null
  }

  export type ApiAccessAvgAggregateOutputType = {
    id: number | null
  }

  export type ApiAccessSumAggregateOutputType = {
    id: number | null
  }

  export type ApiAccessMinAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    trafficSourceType: $Enums.TrafficSourceType | null
    apiAccessType: $Enums.ApiAccessType | null
    isActive: boolean | null
    name: string | null
    login: string | null
    password: string | null
    firstAccessToken: string | null
    secondAccessToken: string | null
  }

  export type ApiAccessMaxAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    trafficSourceType: $Enums.TrafficSourceType | null
    apiAccessType: $Enums.ApiAccessType | null
    isActive: boolean | null
    name: string | null
    login: string | null
    password: string | null
    firstAccessToken: string | null
    secondAccessToken: string | null
  }

  export type ApiAccessCountAggregateOutputType = {
    id: number
    createDate: number
    updateDate: number
    trafficSourceType: number
    apiAccessType: number
    isActive: number
    name: number
    login: number
    password: number
    firstAccessToken: number
    secondAccessToken: number
    _all: number
  }


  export type ApiAccessAvgAggregateInputType = {
    id?: true
  }

  export type ApiAccessSumAggregateInputType = {
    id?: true
  }

  export type ApiAccessMinAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    trafficSourceType?: true
    apiAccessType?: true
    isActive?: true
    name?: true
    login?: true
    password?: true
    firstAccessToken?: true
    secondAccessToken?: true
  }

  export type ApiAccessMaxAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    trafficSourceType?: true
    apiAccessType?: true
    isActive?: true
    name?: true
    login?: true
    password?: true
    firstAccessToken?: true
    secondAccessToken?: true
  }

  export type ApiAccessCountAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    trafficSourceType?: true
    apiAccessType?: true
    isActive?: true
    name?: true
    login?: true
    password?: true
    firstAccessToken?: true
    secondAccessToken?: true
    _all?: true
  }

  export type ApiAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiAccess to aggregate.
     */
    where?: ApiAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiAccesses to fetch.
     */
    orderBy?: ApiAccessOrderByWithRelationInput | ApiAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiAccesses
    **/
    _count?: true | ApiAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiAccessMaxAggregateInputType
  }

  export type GetApiAccessAggregateType<T extends ApiAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateApiAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiAccess[P]>
      : GetScalarType<T[P], AggregateApiAccess[P]>
  }




  export type ApiAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiAccessWhereInput
    orderBy?: ApiAccessOrderByWithAggregationInput | ApiAccessOrderByWithAggregationInput[]
    by: ApiAccessScalarFieldEnum[] | ApiAccessScalarFieldEnum
    having?: ApiAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiAccessCountAggregateInputType | true
    _avg?: ApiAccessAvgAggregateInputType
    _sum?: ApiAccessSumAggregateInputType
    _min?: ApiAccessMinAggregateInputType
    _max?: ApiAccessMaxAggregateInputType
  }

  export type ApiAccessGroupByOutputType = {
    id: number
    createDate: Date
    updateDate: Date
    trafficSourceType: $Enums.TrafficSourceType | null
    apiAccessType: $Enums.ApiAccessType
    isActive: boolean
    name: string
    login: string | null
    password: string | null
    firstAccessToken: string | null
    secondAccessToken: string | null
    _count: ApiAccessCountAggregateOutputType | null
    _avg: ApiAccessAvgAggregateOutputType | null
    _sum: ApiAccessSumAggregateOutputType | null
    _min: ApiAccessMinAggregateOutputType | null
    _max: ApiAccessMaxAggregateOutputType | null
  }

  type GetApiAccessGroupByPayload<T extends ApiAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiAccessGroupByOutputType[P]>
            : GetScalarType<T[P], ApiAccessGroupByOutputType[P]>
        }
      >
    >


  export type ApiAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceType?: boolean
    apiAccessType?: boolean
    isActive?: boolean
    name?: boolean
    login?: boolean
    password?: boolean
    firstAccessToken?: boolean
    secondAccessToken?: boolean
    trafficSourceBmToApiAccessConnections?: boolean | ApiAccess$trafficSourceBmToApiAccessConnectionsArgs<ExtArgs>
    _count?: boolean | ApiAccessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiAccess"]>

  export type ApiAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceType?: boolean
    apiAccessType?: boolean
    isActive?: boolean
    name?: boolean
    login?: boolean
    password?: boolean
    firstAccessToken?: boolean
    secondAccessToken?: boolean
  }, ExtArgs["result"]["apiAccess"]>

  export type ApiAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceType?: boolean
    apiAccessType?: boolean
    isActive?: boolean
    name?: boolean
    login?: boolean
    password?: boolean
    firstAccessToken?: boolean
    secondAccessToken?: boolean
  }, ExtArgs["result"]["apiAccess"]>

  export type ApiAccessSelectScalar = {
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceType?: boolean
    apiAccessType?: boolean
    isActive?: boolean
    name?: boolean
    login?: boolean
    password?: boolean
    firstAccessToken?: boolean
    secondAccessToken?: boolean
  }

  export type ApiAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createDate" | "updateDate" | "trafficSourceType" | "apiAccessType" | "isActive" | "name" | "login" | "password" | "firstAccessToken" | "secondAccessToken", ExtArgs["result"]["apiAccess"]>
  export type ApiAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceBmToApiAccessConnections?: boolean | ApiAccess$trafficSourceBmToApiAccessConnectionsArgs<ExtArgs>
    _count?: boolean | ApiAccessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApiAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ApiAccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ApiAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiAccess"
    objects: {
      trafficSourceBmToApiAccessConnections: Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createDate: Date
      updateDate: Date
      trafficSourceType: $Enums.TrafficSourceType | null
      apiAccessType: $Enums.ApiAccessType
      isActive: boolean
      name: string
      login: string | null
      password: string | null
      firstAccessToken: string | null
      secondAccessToken: string | null
    }, ExtArgs["result"]["apiAccess"]>
    composites: {}
  }

  type ApiAccessGetPayload<S extends boolean | null | undefined | ApiAccessDefaultArgs> = $Result.GetResult<Prisma.$ApiAccessPayload, S>

  type ApiAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiAccessCountAggregateInputType | true
    }

  export interface ApiAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiAccess'], meta: { name: 'ApiAccess' } }
    /**
     * Find zero or one ApiAccess that matches the filter.
     * @param {ApiAccessFindUniqueArgs} args - Arguments to find a ApiAccess
     * @example
     * // Get one ApiAccess
     * const apiAccess = await prisma.apiAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiAccessFindUniqueArgs>(args: SelectSubset<T, ApiAccessFindUniqueArgs<ExtArgs>>): Prisma__ApiAccessClient<$Result.GetResult<Prisma.$ApiAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiAccessFindUniqueOrThrowArgs} args - Arguments to find a ApiAccess
     * @example
     * // Get one ApiAccess
     * const apiAccess = await prisma.apiAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiAccessClient<$Result.GetResult<Prisma.$ApiAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiAccessFindFirstArgs} args - Arguments to find a ApiAccess
     * @example
     * // Get one ApiAccess
     * const apiAccess = await prisma.apiAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiAccessFindFirstArgs>(args?: SelectSubset<T, ApiAccessFindFirstArgs<ExtArgs>>): Prisma__ApiAccessClient<$Result.GetResult<Prisma.$ApiAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiAccessFindFirstOrThrowArgs} args - Arguments to find a ApiAccess
     * @example
     * // Get one ApiAccess
     * const apiAccess = await prisma.apiAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiAccessClient<$Result.GetResult<Prisma.$ApiAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiAccesses
     * const apiAccesses = await prisma.apiAccess.findMany()
     * 
     * // Get first 10 ApiAccesses
     * const apiAccesses = await prisma.apiAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiAccessWithIdOnly = await prisma.apiAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiAccessFindManyArgs>(args?: SelectSubset<T, ApiAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiAccess.
     * @param {ApiAccessCreateArgs} args - Arguments to create a ApiAccess.
     * @example
     * // Create one ApiAccess
     * const ApiAccess = await prisma.apiAccess.create({
     *   data: {
     *     // ... data to create a ApiAccess
     *   }
     * })
     * 
     */
    create<T extends ApiAccessCreateArgs>(args: SelectSubset<T, ApiAccessCreateArgs<ExtArgs>>): Prisma__ApiAccessClient<$Result.GetResult<Prisma.$ApiAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiAccesses.
     * @param {ApiAccessCreateManyArgs} args - Arguments to create many ApiAccesses.
     * @example
     * // Create many ApiAccesses
     * const apiAccess = await prisma.apiAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiAccessCreateManyArgs>(args?: SelectSubset<T, ApiAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiAccesses and returns the data saved in the database.
     * @param {ApiAccessCreateManyAndReturnArgs} args - Arguments to create many ApiAccesses.
     * @example
     * // Create many ApiAccesses
     * const apiAccess = await prisma.apiAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiAccesses and only return the `id`
     * const apiAccessWithIdOnly = await prisma.apiAccess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiAccess.
     * @param {ApiAccessDeleteArgs} args - Arguments to delete one ApiAccess.
     * @example
     * // Delete one ApiAccess
     * const ApiAccess = await prisma.apiAccess.delete({
     *   where: {
     *     // ... filter to delete one ApiAccess
     *   }
     * })
     * 
     */
    delete<T extends ApiAccessDeleteArgs>(args: SelectSubset<T, ApiAccessDeleteArgs<ExtArgs>>): Prisma__ApiAccessClient<$Result.GetResult<Prisma.$ApiAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiAccess.
     * @param {ApiAccessUpdateArgs} args - Arguments to update one ApiAccess.
     * @example
     * // Update one ApiAccess
     * const apiAccess = await prisma.apiAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiAccessUpdateArgs>(args: SelectSubset<T, ApiAccessUpdateArgs<ExtArgs>>): Prisma__ApiAccessClient<$Result.GetResult<Prisma.$ApiAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiAccesses.
     * @param {ApiAccessDeleteManyArgs} args - Arguments to filter ApiAccesses to delete.
     * @example
     * // Delete a few ApiAccesses
     * const { count } = await prisma.apiAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiAccessDeleteManyArgs>(args?: SelectSubset<T, ApiAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiAccesses
     * const apiAccess = await prisma.apiAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiAccessUpdateManyArgs>(args: SelectSubset<T, ApiAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiAccesses and returns the data updated in the database.
     * @param {ApiAccessUpdateManyAndReturnArgs} args - Arguments to update many ApiAccesses.
     * @example
     * // Update many ApiAccesses
     * const apiAccess = await prisma.apiAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiAccesses and only return the `id`
     * const apiAccessWithIdOnly = await prisma.apiAccess.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiAccess.
     * @param {ApiAccessUpsertArgs} args - Arguments to update or create a ApiAccess.
     * @example
     * // Update or create a ApiAccess
     * const apiAccess = await prisma.apiAccess.upsert({
     *   create: {
     *     // ... data to create a ApiAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiAccess we want to update
     *   }
     * })
     */
    upsert<T extends ApiAccessUpsertArgs>(args: SelectSubset<T, ApiAccessUpsertArgs<ExtArgs>>): Prisma__ApiAccessClient<$Result.GetResult<Prisma.$ApiAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiAccessCountArgs} args - Arguments to filter ApiAccesses to count.
     * @example
     * // Count the number of ApiAccesses
     * const count = await prisma.apiAccess.count({
     *   where: {
     *     // ... the filter for the ApiAccesses we want to count
     *   }
     * })
    **/
    count<T extends ApiAccessCountArgs>(
      args?: Subset<T, ApiAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiAccessAggregateArgs>(args: Subset<T, ApiAccessAggregateArgs>): Prisma.PrismaPromise<GetApiAccessAggregateType<T>>

    /**
     * Group by ApiAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiAccessGroupByArgs['orderBy'] }
        : { orderBy?: ApiAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiAccess model
   */
  readonly fields: ApiAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trafficSourceBmToApiAccessConnections<T extends ApiAccess$trafficSourceBmToApiAccessConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, ApiAccess$trafficSourceBmToApiAccessConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiAccess model
   */
  interface ApiAccessFieldRefs {
    readonly id: FieldRef<"ApiAccess", 'Int'>
    readonly createDate: FieldRef<"ApiAccess", 'DateTime'>
    readonly updateDate: FieldRef<"ApiAccess", 'DateTime'>
    readonly trafficSourceType: FieldRef<"ApiAccess", 'TrafficSourceType'>
    readonly apiAccessType: FieldRef<"ApiAccess", 'ApiAccessType'>
    readonly isActive: FieldRef<"ApiAccess", 'Boolean'>
    readonly name: FieldRef<"ApiAccess", 'String'>
    readonly login: FieldRef<"ApiAccess", 'String'>
    readonly password: FieldRef<"ApiAccess", 'String'>
    readonly firstAccessToken: FieldRef<"ApiAccess", 'String'>
    readonly secondAccessToken: FieldRef<"ApiAccess", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ApiAccess findUnique
   */
  export type ApiAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiAccess
     */
    select?: ApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiAccess
     */
    omit?: ApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiAccessInclude<ExtArgs> | null
    /**
     * Filter, which ApiAccess to fetch.
     */
    where: ApiAccessWhereUniqueInput
  }

  /**
   * ApiAccess findUniqueOrThrow
   */
  export type ApiAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiAccess
     */
    select?: ApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiAccess
     */
    omit?: ApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiAccessInclude<ExtArgs> | null
    /**
     * Filter, which ApiAccess to fetch.
     */
    where: ApiAccessWhereUniqueInput
  }

  /**
   * ApiAccess findFirst
   */
  export type ApiAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiAccess
     */
    select?: ApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiAccess
     */
    omit?: ApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiAccessInclude<ExtArgs> | null
    /**
     * Filter, which ApiAccess to fetch.
     */
    where?: ApiAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiAccesses to fetch.
     */
    orderBy?: ApiAccessOrderByWithRelationInput | ApiAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiAccesses.
     */
    cursor?: ApiAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiAccesses.
     */
    distinct?: ApiAccessScalarFieldEnum | ApiAccessScalarFieldEnum[]
  }

  /**
   * ApiAccess findFirstOrThrow
   */
  export type ApiAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiAccess
     */
    select?: ApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiAccess
     */
    omit?: ApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiAccessInclude<ExtArgs> | null
    /**
     * Filter, which ApiAccess to fetch.
     */
    where?: ApiAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiAccesses to fetch.
     */
    orderBy?: ApiAccessOrderByWithRelationInput | ApiAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiAccesses.
     */
    cursor?: ApiAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiAccesses.
     */
    distinct?: ApiAccessScalarFieldEnum | ApiAccessScalarFieldEnum[]
  }

  /**
   * ApiAccess findMany
   */
  export type ApiAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiAccess
     */
    select?: ApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiAccess
     */
    omit?: ApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiAccessInclude<ExtArgs> | null
    /**
     * Filter, which ApiAccesses to fetch.
     */
    where?: ApiAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiAccesses to fetch.
     */
    orderBy?: ApiAccessOrderByWithRelationInput | ApiAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiAccesses.
     */
    cursor?: ApiAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiAccesses.
     */
    skip?: number
    distinct?: ApiAccessScalarFieldEnum | ApiAccessScalarFieldEnum[]
  }

  /**
   * ApiAccess create
   */
  export type ApiAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiAccess
     */
    select?: ApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiAccess
     */
    omit?: ApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiAccess.
     */
    data: XOR<ApiAccessCreateInput, ApiAccessUncheckedCreateInput>
  }

  /**
   * ApiAccess createMany
   */
  export type ApiAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiAccesses.
     */
    data: ApiAccessCreateManyInput | ApiAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiAccess createManyAndReturn
   */
  export type ApiAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiAccess
     */
    select?: ApiAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiAccess
     */
    omit?: ApiAccessOmit<ExtArgs> | null
    /**
     * The data used to create many ApiAccesses.
     */
    data: ApiAccessCreateManyInput | ApiAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiAccess update
   */
  export type ApiAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiAccess
     */
    select?: ApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiAccess
     */
    omit?: ApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiAccess.
     */
    data: XOR<ApiAccessUpdateInput, ApiAccessUncheckedUpdateInput>
    /**
     * Choose, which ApiAccess to update.
     */
    where: ApiAccessWhereUniqueInput
  }

  /**
   * ApiAccess updateMany
   */
  export type ApiAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiAccesses.
     */
    data: XOR<ApiAccessUpdateManyMutationInput, ApiAccessUncheckedUpdateManyInput>
    /**
     * Filter which ApiAccesses to update
     */
    where?: ApiAccessWhereInput
    /**
     * Limit how many ApiAccesses to update.
     */
    limit?: number
  }

  /**
   * ApiAccess updateManyAndReturn
   */
  export type ApiAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiAccess
     */
    select?: ApiAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiAccess
     */
    omit?: ApiAccessOmit<ExtArgs> | null
    /**
     * The data used to update ApiAccesses.
     */
    data: XOR<ApiAccessUpdateManyMutationInput, ApiAccessUncheckedUpdateManyInput>
    /**
     * Filter which ApiAccesses to update
     */
    where?: ApiAccessWhereInput
    /**
     * Limit how many ApiAccesses to update.
     */
    limit?: number
  }

  /**
   * ApiAccess upsert
   */
  export type ApiAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiAccess
     */
    select?: ApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiAccess
     */
    omit?: ApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiAccess to update in case it exists.
     */
    where: ApiAccessWhereUniqueInput
    /**
     * In case the ApiAccess found by the `where` argument doesn't exist, create a new ApiAccess with this data.
     */
    create: XOR<ApiAccessCreateInput, ApiAccessUncheckedCreateInput>
    /**
     * In case the ApiAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiAccessUpdateInput, ApiAccessUncheckedUpdateInput>
  }

  /**
   * ApiAccess delete
   */
  export type ApiAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiAccess
     */
    select?: ApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiAccess
     */
    omit?: ApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiAccessInclude<ExtArgs> | null
    /**
     * Filter which ApiAccess to delete.
     */
    where: ApiAccessWhereUniqueInput
  }

  /**
   * ApiAccess deleteMany
   */
  export type ApiAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiAccesses to delete
     */
    where?: ApiAccessWhereInput
    /**
     * Limit how many ApiAccesses to delete.
     */
    limit?: number
  }

  /**
   * ApiAccess.trafficSourceBmToApiAccessConnections
   */
  export type ApiAccess$trafficSourceBmToApiAccessConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBmToApiAccess
     */
    select?: TrafficSourceBmToApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBmToApiAccess
     */
    omit?: TrafficSourceBmToApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmToApiAccessInclude<ExtArgs> | null
    where?: TrafficSourceBmToApiAccessWhereInput
    orderBy?: TrafficSourceBmToApiAccessOrderByWithRelationInput | TrafficSourceBmToApiAccessOrderByWithRelationInput[]
    cursor?: TrafficSourceBmToApiAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrafficSourceBmToApiAccessScalarFieldEnum | TrafficSourceBmToApiAccessScalarFieldEnum[]
  }

  /**
   * ApiAccess without action
   */
  export type ApiAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiAccess
     */
    select?: ApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiAccess
     */
    omit?: ApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiAccessInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogAvgAggregateOutputType = {
    id: number | null
    workerId: number | null
  }

  export type LogSumAggregateOutputType = {
    id: number | null
    workerId: number | null
  }

  export type LogMinAggregateOutputType = {
    id: number | null
    createDate: Date | null
    name: string | null
    message: string | null
    isError: boolean | null
    workerId: number | null
    stack: string | null
    request: string | null
    response: string | null
    data: string | null
  }

  export type LogMaxAggregateOutputType = {
    id: number | null
    createDate: Date | null
    name: string | null
    message: string | null
    isError: boolean | null
    workerId: number | null
    stack: string | null
    request: string | null
    response: string | null
    data: string | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    createDate: number
    name: number
    message: number
    isError: number
    workerId: number
    stack: number
    request: number
    response: number
    data: number
    _all: number
  }


  export type LogAvgAggregateInputType = {
    id?: true
    workerId?: true
  }

  export type LogSumAggregateInputType = {
    id?: true
    workerId?: true
  }

  export type LogMinAggregateInputType = {
    id?: true
    createDate?: true
    name?: true
    message?: true
    isError?: true
    workerId?: true
    stack?: true
    request?: true
    response?: true
    data?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    createDate?: true
    name?: true
    message?: true
    isError?: true
    workerId?: true
    stack?: true
    request?: true
    response?: true
    data?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    createDate?: true
    name?: true
    message?: true
    isError?: true
    workerId?: true
    stack?: true
    request?: true
    response?: true
    data?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _avg?: LogAvgAggregateInputType
    _sum?: LogSumAggregateInputType
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: number
    createDate: Date
    name: string | null
    message: string | null
    isError: boolean
    workerId: number | null
    stack: string | null
    request: string | null
    response: string | null
    data: string | null
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    name?: boolean
    message?: boolean
    isError?: boolean
    workerId?: boolean
    stack?: boolean
    request?: boolean
    response?: boolean
    data?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    name?: boolean
    message?: boolean
    isError?: boolean
    workerId?: boolean
    stack?: boolean
    request?: boolean
    response?: boolean
    data?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    name?: boolean
    message?: boolean
    isError?: boolean
    workerId?: boolean
    stack?: boolean
    request?: boolean
    response?: boolean
    data?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    createDate?: boolean
    name?: boolean
    message?: boolean
    isError?: boolean
    workerId?: boolean
    stack?: boolean
    request?: boolean
    response?: boolean
    data?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createDate" | "name" | "message" | "isError" | "workerId" | "stack" | "request" | "response" | "data", ExtArgs["result"]["log"]>

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createDate: Date
      name: string | null
      message: string | null
      isError: boolean
      workerId: number | null
      stack: string | null
      request: string | null
      response: string | null
      data: string | null
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogCreateManyAndReturnArgs>(args?: SelectSubset<T, LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {LogUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogUpdateManyAndReturnArgs>(args: SelectSubset<T, LogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Log model
   */
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'Int'>
    readonly createDate: FieldRef<"Log", 'DateTime'>
    readonly name: FieldRef<"Log", 'String'>
    readonly message: FieldRef<"Log", 'String'>
    readonly isError: FieldRef<"Log", 'Boolean'>
    readonly workerId: FieldRef<"Log", 'Int'>
    readonly stack: FieldRef<"Log", 'String'>
    readonly request: FieldRef<"Log", 'String'>
    readonly response: FieldRef<"Log", 'String'>
    readonly data: FieldRef<"Log", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log createManyAndReturn
   */
  export type LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log updateManyAndReturn
   */
  export type LogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    id: number | null
    minWorkerThreads: number | null
    maxWorkerThreads: number | null
  }

  export type SettingsSumAggregateOutputType = {
    id: number | null
    minWorkerThreads: number | null
    maxWorkerThreads: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    isActive: boolean | null
    name: string | null
    minWorkerThreads: number | null
    maxWorkerThreads: number | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    isActive: boolean | null
    name: string | null
    minWorkerThreads: number | null
    maxWorkerThreads: number | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    createDate: number
    updateDate: number
    isActive: number
    name: number
    minWorkerThreads: number
    maxWorkerThreads: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    id?: true
    minWorkerThreads?: true
    maxWorkerThreads?: true
  }

  export type SettingsSumAggregateInputType = {
    id?: true
    minWorkerThreads?: true
    maxWorkerThreads?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    isActive?: true
    name?: true
    minWorkerThreads?: true
    maxWorkerThreads?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    isActive?: true
    name?: true
    minWorkerThreads?: true
    maxWorkerThreads?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    isActive?: true
    name?: true
    minWorkerThreads?: true
    maxWorkerThreads?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: number
    createDate: Date
    updateDate: Date
    isActive: boolean
    name: string
    minWorkerThreads: number
    maxWorkerThreads: number
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    isActive?: boolean
    name?: boolean
    minWorkerThreads?: boolean
    maxWorkerThreads?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    isActive?: boolean
    name?: boolean
    minWorkerThreads?: boolean
    maxWorkerThreads?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    isActive?: boolean
    name?: boolean
    minWorkerThreads?: boolean
    maxWorkerThreads?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    isActive?: boolean
    name?: boolean
    minWorkerThreads?: boolean
    maxWorkerThreads?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createDate" | "updateDate" | "isActive" | "name" | "minWorkerThreads" | "maxWorkerThreads", ExtArgs["result"]["settings"]>

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createDate: Date
      updateDate: Date
      isActive: boolean
      name: string
      minWorkerThreads: number
      maxWorkerThreads: number
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'Int'>
    readonly createDate: FieldRef<"Settings", 'DateTime'>
    readonly updateDate: FieldRef<"Settings", 'DateTime'>
    readonly isActive: FieldRef<"Settings", 'Boolean'>
    readonly name: FieldRef<"Settings", 'String'>
    readonly minWorkerThreads: FieldRef<"Settings", 'Int'>
    readonly maxWorkerThreads: FieldRef<"Settings", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings updateManyAndReturn
   */
  export type SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
  }


  /**
   * Model TaskLoop
   */

  export type AggregateTaskLoop = {
    _count: TaskLoopCountAggregateOutputType | null
    _avg: TaskLoopAvgAggregateOutputType | null
    _sum: TaskLoopSumAggregateOutputType | null
    _min: TaskLoopMinAggregateOutputType | null
    _max: TaskLoopMaxAggregateOutputType | null
  }

  export type TaskLoopAvgAggregateOutputType = {
    id: number | null
    intervalMin: number | null
  }

  export type TaskLoopSumAggregateOutputType = {
    id: number | null
    intervalMin: number | null
  }

  export type TaskLoopMinAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    type: $Enums.TaskType | null
    intervalMin: number | null
    isActive: boolean | null
  }

  export type TaskLoopMaxAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    type: $Enums.TaskType | null
    intervalMin: number | null
    isActive: boolean | null
  }

  export type TaskLoopCountAggregateOutputType = {
    id: number
    createDate: number
    updateDate: number
    type: number
    payload: number
    intervalMin: number
    isActive: number
    _all: number
  }


  export type TaskLoopAvgAggregateInputType = {
    id?: true
    intervalMin?: true
  }

  export type TaskLoopSumAggregateInputType = {
    id?: true
    intervalMin?: true
  }

  export type TaskLoopMinAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    type?: true
    intervalMin?: true
    isActive?: true
  }

  export type TaskLoopMaxAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    type?: true
    intervalMin?: true
    isActive?: true
  }

  export type TaskLoopCountAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    type?: true
    payload?: true
    intervalMin?: true
    isActive?: true
    _all?: true
  }

  export type TaskLoopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskLoop to aggregate.
     */
    where?: TaskLoopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLoops to fetch.
     */
    orderBy?: TaskLoopOrderByWithRelationInput | TaskLoopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskLoopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLoops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLoops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskLoops
    **/
    _count?: true | TaskLoopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskLoopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskLoopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskLoopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskLoopMaxAggregateInputType
  }

  export type GetTaskLoopAggregateType<T extends TaskLoopAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskLoop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskLoop[P]>
      : GetScalarType<T[P], AggregateTaskLoop[P]>
  }




  export type TaskLoopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLoopWhereInput
    orderBy?: TaskLoopOrderByWithAggregationInput | TaskLoopOrderByWithAggregationInput[]
    by: TaskLoopScalarFieldEnum[] | TaskLoopScalarFieldEnum
    having?: TaskLoopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskLoopCountAggregateInputType | true
    _avg?: TaskLoopAvgAggregateInputType
    _sum?: TaskLoopSumAggregateInputType
    _min?: TaskLoopMinAggregateInputType
    _max?: TaskLoopMaxAggregateInputType
  }

  export type TaskLoopGroupByOutputType = {
    id: number
    createDate: Date
    updateDate: Date
    type: $Enums.TaskType
    payload: JsonValue | null
    intervalMin: number
    isActive: boolean
    _count: TaskLoopCountAggregateOutputType | null
    _avg: TaskLoopAvgAggregateOutputType | null
    _sum: TaskLoopSumAggregateOutputType | null
    _min: TaskLoopMinAggregateOutputType | null
    _max: TaskLoopMaxAggregateOutputType | null
  }

  type GetTaskLoopGroupByPayload<T extends TaskLoopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskLoopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskLoopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskLoopGroupByOutputType[P]>
            : GetScalarType<T[P], TaskLoopGroupByOutputType[P]>
        }
      >
    >


  export type TaskLoopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    type?: boolean
    payload?: boolean
    intervalMin?: boolean
    isActive?: boolean
    tasks?: boolean | TaskLoop$tasksArgs<ExtArgs>
    _count?: boolean | TaskLoopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLoop"]>

  export type TaskLoopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    type?: boolean
    payload?: boolean
    intervalMin?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["taskLoop"]>

  export type TaskLoopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    type?: boolean
    payload?: boolean
    intervalMin?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["taskLoop"]>

  export type TaskLoopSelectScalar = {
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    type?: boolean
    payload?: boolean
    intervalMin?: boolean
    isActive?: boolean
  }

  export type TaskLoopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createDate" | "updateDate" | "type" | "payload" | "intervalMin" | "isActive", ExtArgs["result"]["taskLoop"]>
  export type TaskLoopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TaskLoop$tasksArgs<ExtArgs>
    _count?: boolean | TaskLoopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskLoopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TaskLoopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TaskLoopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskLoop"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createDate: Date
      updateDate: Date
      type: $Enums.TaskType
      payload: Prisma.JsonValue | null
      intervalMin: number
      isActive: boolean
    }, ExtArgs["result"]["taskLoop"]>
    composites: {}
  }

  type TaskLoopGetPayload<S extends boolean | null | undefined | TaskLoopDefaultArgs> = $Result.GetResult<Prisma.$TaskLoopPayload, S>

  type TaskLoopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskLoopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskLoopCountAggregateInputType | true
    }

  export interface TaskLoopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskLoop'], meta: { name: 'TaskLoop' } }
    /**
     * Find zero or one TaskLoop that matches the filter.
     * @param {TaskLoopFindUniqueArgs} args - Arguments to find a TaskLoop
     * @example
     * // Get one TaskLoop
     * const taskLoop = await prisma.taskLoop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskLoopFindUniqueArgs>(args: SelectSubset<T, TaskLoopFindUniqueArgs<ExtArgs>>): Prisma__TaskLoopClient<$Result.GetResult<Prisma.$TaskLoopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskLoop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskLoopFindUniqueOrThrowArgs} args - Arguments to find a TaskLoop
     * @example
     * // Get one TaskLoop
     * const taskLoop = await prisma.taskLoop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskLoopFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskLoopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskLoopClient<$Result.GetResult<Prisma.$TaskLoopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskLoop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLoopFindFirstArgs} args - Arguments to find a TaskLoop
     * @example
     * // Get one TaskLoop
     * const taskLoop = await prisma.taskLoop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskLoopFindFirstArgs>(args?: SelectSubset<T, TaskLoopFindFirstArgs<ExtArgs>>): Prisma__TaskLoopClient<$Result.GetResult<Prisma.$TaskLoopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskLoop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLoopFindFirstOrThrowArgs} args - Arguments to find a TaskLoop
     * @example
     * // Get one TaskLoop
     * const taskLoop = await prisma.taskLoop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskLoopFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskLoopFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskLoopClient<$Result.GetResult<Prisma.$TaskLoopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskLoops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLoopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskLoops
     * const taskLoops = await prisma.taskLoop.findMany()
     * 
     * // Get first 10 TaskLoops
     * const taskLoops = await prisma.taskLoop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskLoopWithIdOnly = await prisma.taskLoop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskLoopFindManyArgs>(args?: SelectSubset<T, TaskLoopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLoopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskLoop.
     * @param {TaskLoopCreateArgs} args - Arguments to create a TaskLoop.
     * @example
     * // Create one TaskLoop
     * const TaskLoop = await prisma.taskLoop.create({
     *   data: {
     *     // ... data to create a TaskLoop
     *   }
     * })
     * 
     */
    create<T extends TaskLoopCreateArgs>(args: SelectSubset<T, TaskLoopCreateArgs<ExtArgs>>): Prisma__TaskLoopClient<$Result.GetResult<Prisma.$TaskLoopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskLoops.
     * @param {TaskLoopCreateManyArgs} args - Arguments to create many TaskLoops.
     * @example
     * // Create many TaskLoops
     * const taskLoop = await prisma.taskLoop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskLoopCreateManyArgs>(args?: SelectSubset<T, TaskLoopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskLoops and returns the data saved in the database.
     * @param {TaskLoopCreateManyAndReturnArgs} args - Arguments to create many TaskLoops.
     * @example
     * // Create many TaskLoops
     * const taskLoop = await prisma.taskLoop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskLoops and only return the `id`
     * const taskLoopWithIdOnly = await prisma.taskLoop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskLoopCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskLoopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLoopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskLoop.
     * @param {TaskLoopDeleteArgs} args - Arguments to delete one TaskLoop.
     * @example
     * // Delete one TaskLoop
     * const TaskLoop = await prisma.taskLoop.delete({
     *   where: {
     *     // ... filter to delete one TaskLoop
     *   }
     * })
     * 
     */
    delete<T extends TaskLoopDeleteArgs>(args: SelectSubset<T, TaskLoopDeleteArgs<ExtArgs>>): Prisma__TaskLoopClient<$Result.GetResult<Prisma.$TaskLoopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskLoop.
     * @param {TaskLoopUpdateArgs} args - Arguments to update one TaskLoop.
     * @example
     * // Update one TaskLoop
     * const taskLoop = await prisma.taskLoop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskLoopUpdateArgs>(args: SelectSubset<T, TaskLoopUpdateArgs<ExtArgs>>): Prisma__TaskLoopClient<$Result.GetResult<Prisma.$TaskLoopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskLoops.
     * @param {TaskLoopDeleteManyArgs} args - Arguments to filter TaskLoops to delete.
     * @example
     * // Delete a few TaskLoops
     * const { count } = await prisma.taskLoop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskLoopDeleteManyArgs>(args?: SelectSubset<T, TaskLoopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskLoops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLoopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskLoops
     * const taskLoop = await prisma.taskLoop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskLoopUpdateManyArgs>(args: SelectSubset<T, TaskLoopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskLoops and returns the data updated in the database.
     * @param {TaskLoopUpdateManyAndReturnArgs} args - Arguments to update many TaskLoops.
     * @example
     * // Update many TaskLoops
     * const taskLoop = await prisma.taskLoop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskLoops and only return the `id`
     * const taskLoopWithIdOnly = await prisma.taskLoop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskLoopUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskLoopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLoopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskLoop.
     * @param {TaskLoopUpsertArgs} args - Arguments to update or create a TaskLoop.
     * @example
     * // Update or create a TaskLoop
     * const taskLoop = await prisma.taskLoop.upsert({
     *   create: {
     *     // ... data to create a TaskLoop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskLoop we want to update
     *   }
     * })
     */
    upsert<T extends TaskLoopUpsertArgs>(args: SelectSubset<T, TaskLoopUpsertArgs<ExtArgs>>): Prisma__TaskLoopClient<$Result.GetResult<Prisma.$TaskLoopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskLoops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLoopCountArgs} args - Arguments to filter TaskLoops to count.
     * @example
     * // Count the number of TaskLoops
     * const count = await prisma.taskLoop.count({
     *   where: {
     *     // ... the filter for the TaskLoops we want to count
     *   }
     * })
    **/
    count<T extends TaskLoopCountArgs>(
      args?: Subset<T, TaskLoopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskLoopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskLoop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLoopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskLoopAggregateArgs>(args: Subset<T, TaskLoopAggregateArgs>): Prisma.PrismaPromise<GetTaskLoopAggregateType<T>>

    /**
     * Group by TaskLoop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLoopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskLoopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskLoopGroupByArgs['orderBy'] }
        : { orderBy?: TaskLoopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskLoopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskLoopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskLoop model
   */
  readonly fields: TaskLoopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskLoop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskLoopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends TaskLoop$tasksArgs<ExtArgs> = {}>(args?: Subset<T, TaskLoop$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskLoop model
   */
  interface TaskLoopFieldRefs {
    readonly id: FieldRef<"TaskLoop", 'Int'>
    readonly createDate: FieldRef<"TaskLoop", 'DateTime'>
    readonly updateDate: FieldRef<"TaskLoop", 'DateTime'>
    readonly type: FieldRef<"TaskLoop", 'TaskType'>
    readonly payload: FieldRef<"TaskLoop", 'Json'>
    readonly intervalMin: FieldRef<"TaskLoop", 'Float'>
    readonly isActive: FieldRef<"TaskLoop", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TaskLoop findUnique
   */
  export type TaskLoopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLoop
     */
    select?: TaskLoopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLoop
     */
    omit?: TaskLoopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLoopInclude<ExtArgs> | null
    /**
     * Filter, which TaskLoop to fetch.
     */
    where: TaskLoopWhereUniqueInput
  }

  /**
   * TaskLoop findUniqueOrThrow
   */
  export type TaskLoopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLoop
     */
    select?: TaskLoopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLoop
     */
    omit?: TaskLoopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLoopInclude<ExtArgs> | null
    /**
     * Filter, which TaskLoop to fetch.
     */
    where: TaskLoopWhereUniqueInput
  }

  /**
   * TaskLoop findFirst
   */
  export type TaskLoopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLoop
     */
    select?: TaskLoopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLoop
     */
    omit?: TaskLoopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLoopInclude<ExtArgs> | null
    /**
     * Filter, which TaskLoop to fetch.
     */
    where?: TaskLoopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLoops to fetch.
     */
    orderBy?: TaskLoopOrderByWithRelationInput | TaskLoopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLoops.
     */
    cursor?: TaskLoopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLoops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLoops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLoops.
     */
    distinct?: TaskLoopScalarFieldEnum | TaskLoopScalarFieldEnum[]
  }

  /**
   * TaskLoop findFirstOrThrow
   */
  export type TaskLoopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLoop
     */
    select?: TaskLoopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLoop
     */
    omit?: TaskLoopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLoopInclude<ExtArgs> | null
    /**
     * Filter, which TaskLoop to fetch.
     */
    where?: TaskLoopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLoops to fetch.
     */
    orderBy?: TaskLoopOrderByWithRelationInput | TaskLoopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLoops.
     */
    cursor?: TaskLoopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLoops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLoops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLoops.
     */
    distinct?: TaskLoopScalarFieldEnum | TaskLoopScalarFieldEnum[]
  }

  /**
   * TaskLoop findMany
   */
  export type TaskLoopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLoop
     */
    select?: TaskLoopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLoop
     */
    omit?: TaskLoopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLoopInclude<ExtArgs> | null
    /**
     * Filter, which TaskLoops to fetch.
     */
    where?: TaskLoopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLoops to fetch.
     */
    orderBy?: TaskLoopOrderByWithRelationInput | TaskLoopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskLoops.
     */
    cursor?: TaskLoopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLoops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLoops.
     */
    skip?: number
    distinct?: TaskLoopScalarFieldEnum | TaskLoopScalarFieldEnum[]
  }

  /**
   * TaskLoop create
   */
  export type TaskLoopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLoop
     */
    select?: TaskLoopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLoop
     */
    omit?: TaskLoopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLoopInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskLoop.
     */
    data: XOR<TaskLoopCreateInput, TaskLoopUncheckedCreateInput>
  }

  /**
   * TaskLoop createMany
   */
  export type TaskLoopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskLoops.
     */
    data: TaskLoopCreateManyInput | TaskLoopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskLoop createManyAndReturn
   */
  export type TaskLoopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLoop
     */
    select?: TaskLoopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLoop
     */
    omit?: TaskLoopOmit<ExtArgs> | null
    /**
     * The data used to create many TaskLoops.
     */
    data: TaskLoopCreateManyInput | TaskLoopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskLoop update
   */
  export type TaskLoopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLoop
     */
    select?: TaskLoopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLoop
     */
    omit?: TaskLoopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLoopInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskLoop.
     */
    data: XOR<TaskLoopUpdateInput, TaskLoopUncheckedUpdateInput>
    /**
     * Choose, which TaskLoop to update.
     */
    where: TaskLoopWhereUniqueInput
  }

  /**
   * TaskLoop updateMany
   */
  export type TaskLoopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskLoops.
     */
    data: XOR<TaskLoopUpdateManyMutationInput, TaskLoopUncheckedUpdateManyInput>
    /**
     * Filter which TaskLoops to update
     */
    where?: TaskLoopWhereInput
    /**
     * Limit how many TaskLoops to update.
     */
    limit?: number
  }

  /**
   * TaskLoop updateManyAndReturn
   */
  export type TaskLoopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLoop
     */
    select?: TaskLoopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLoop
     */
    omit?: TaskLoopOmit<ExtArgs> | null
    /**
     * The data used to update TaskLoops.
     */
    data: XOR<TaskLoopUpdateManyMutationInput, TaskLoopUncheckedUpdateManyInput>
    /**
     * Filter which TaskLoops to update
     */
    where?: TaskLoopWhereInput
    /**
     * Limit how many TaskLoops to update.
     */
    limit?: number
  }

  /**
   * TaskLoop upsert
   */
  export type TaskLoopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLoop
     */
    select?: TaskLoopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLoop
     */
    omit?: TaskLoopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLoopInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskLoop to update in case it exists.
     */
    where: TaskLoopWhereUniqueInput
    /**
     * In case the TaskLoop found by the `where` argument doesn't exist, create a new TaskLoop with this data.
     */
    create: XOR<TaskLoopCreateInput, TaskLoopUncheckedCreateInput>
    /**
     * In case the TaskLoop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskLoopUpdateInput, TaskLoopUncheckedUpdateInput>
  }

  /**
   * TaskLoop delete
   */
  export type TaskLoopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLoop
     */
    select?: TaskLoopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLoop
     */
    omit?: TaskLoopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLoopInclude<ExtArgs> | null
    /**
     * Filter which TaskLoop to delete.
     */
    where: TaskLoopWhereUniqueInput
  }

  /**
   * TaskLoop deleteMany
   */
  export type TaskLoopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskLoops to delete
     */
    where?: TaskLoopWhereInput
    /**
     * Limit how many TaskLoops to delete.
     */
    limit?: number
  }

  /**
   * TaskLoop.tasks
   */
  export type TaskLoop$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * TaskLoop without action
   */
  export type TaskLoopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLoop
     */
    select?: TaskLoopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLoop
     */
    omit?: TaskLoopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLoopInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    taskLoopId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    taskLoopId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    type: $Enums.TaskType | null
    status: $Enums.TaskStatus | null
    error: string | null
    startTime: Date | null
    endTime: Date | null
    taskLoopId: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    type: $Enums.TaskType | null
    status: $Enums.TaskStatus | null
    error: string | null
    startTime: Date | null
    endTime: Date | null
    taskLoopId: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    createDate: number
    updateDate: number
    type: number
    payload: number
    status: number
    result: number
    error: number
    startTime: number
    endTime: number
    taskLoopId: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    taskLoopId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    taskLoopId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    type?: true
    status?: true
    error?: true
    startTime?: true
    endTime?: true
    taskLoopId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    type?: true
    status?: true
    error?: true
    startTime?: true
    endTime?: true
    taskLoopId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    type?: true
    payload?: true
    status?: true
    result?: true
    error?: true
    startTime?: true
    endTime?: true
    taskLoopId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    createDate: Date
    updateDate: Date
    type: $Enums.TaskType
    payload: JsonValue | null
    status: $Enums.TaskStatus
    result: JsonValue | null
    error: string | null
    startTime: Date | null
    endTime: Date | null
    taskLoopId: number | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    type?: boolean
    payload?: boolean
    status?: boolean
    result?: boolean
    error?: boolean
    startTime?: boolean
    endTime?: boolean
    taskLoopId?: boolean
    taskLoop?: boolean | Task$taskLoopArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    type?: boolean
    payload?: boolean
    status?: boolean
    result?: boolean
    error?: boolean
    startTime?: boolean
    endTime?: boolean
    taskLoopId?: boolean
    taskLoop?: boolean | Task$taskLoopArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    type?: boolean
    payload?: boolean
    status?: boolean
    result?: boolean
    error?: boolean
    startTime?: boolean
    endTime?: boolean
    taskLoopId?: boolean
    taskLoop?: boolean | Task$taskLoopArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    type?: boolean
    payload?: boolean
    status?: boolean
    result?: boolean
    error?: boolean
    startTime?: boolean
    endTime?: boolean
    taskLoopId?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createDate" | "updateDate" | "type" | "payload" | "status" | "result" | "error" | "startTime" | "endTime" | "taskLoopId", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskLoop?: boolean | Task$taskLoopArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskLoop?: boolean | Task$taskLoopArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskLoop?: boolean | Task$taskLoopArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      taskLoop: Prisma.$TaskLoopPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createDate: Date
      updateDate: Date
      type: $Enums.TaskType
      payload: Prisma.JsonValue | null
      status: $Enums.TaskStatus
      result: Prisma.JsonValue | null
      error: string | null
      startTime: Date | null
      endTime: Date | null
      taskLoopId: number | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taskLoop<T extends Task$taskLoopArgs<ExtArgs> = {}>(args?: Subset<T, Task$taskLoopArgs<ExtArgs>>): Prisma__TaskLoopClient<$Result.GetResult<Prisma.$TaskLoopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly createDate: FieldRef<"Task", 'DateTime'>
    readonly updateDate: FieldRef<"Task", 'DateTime'>
    readonly type: FieldRef<"Task", 'TaskType'>
    readonly payload: FieldRef<"Task", 'Json'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly result: FieldRef<"Task", 'Json'>
    readonly error: FieldRef<"Task", 'String'>
    readonly startTime: FieldRef<"Task", 'DateTime'>
    readonly endTime: FieldRef<"Task", 'DateTime'>
    readonly taskLoopId: FieldRef<"Task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.taskLoop
   */
  export type Task$taskLoopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLoop
     */
    select?: TaskLoopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLoop
     */
    omit?: TaskLoopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLoopInclude<ExtArgs> | null
    where?: TaskLoopWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TrafficSourceAccount
   */

  export type AggregateTrafficSourceAccount = {
    _count: TrafficSourceAccountCountAggregateOutputType | null
    _avg: TrafficSourceAccountAvgAggregateOutputType | null
    _sum: TrafficSourceAccountSumAggregateOutputType | null
    _min: TrafficSourceAccountMinAggregateOutputType | null
    _max: TrafficSourceAccountMaxAggregateOutputType | null
  }

  export type TrafficSourceAccountAvgAggregateOutputType = {
    id: number | null
    balance: Decimal | null
    spendCap: Decimal | null
    amountSpent: Decimal | null
    trafficSourceOwnerBmId: number | null
  }

  export type TrafficSourceAccountSumAggregateOutputType = {
    id: number | null
    balance: Decimal | null
    spendCap: Decimal | null
    amountSpent: Decimal | null
    trafficSourceOwnerBmId: number | null
  }

  export type TrafficSourceAccountMinAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    trafficSourceType: $Enums.TrafficSourceType | null
    externalId: string | null
    name: string | null
    externalStatus: string | null
    externalCreatedTime: Date | null
    status: $Enums.TrafficSourceAccountStatus | null
    balance: Decimal | null
    externalCurrency: string | null
    externalTimezone: string | null
    spendCap: Decimal | null
    amountSpent: Decimal | null
    isActive: boolean | null
    trafficSourceOwnerBmId: number | null
  }

  export type TrafficSourceAccountMaxAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    trafficSourceType: $Enums.TrafficSourceType | null
    externalId: string | null
    name: string | null
    externalStatus: string | null
    externalCreatedTime: Date | null
    status: $Enums.TrafficSourceAccountStatus | null
    balance: Decimal | null
    externalCurrency: string | null
    externalTimezone: string | null
    spendCap: Decimal | null
    amountSpent: Decimal | null
    isActive: boolean | null
    trafficSourceOwnerBmId: number | null
  }

  export type TrafficSourceAccountCountAggregateOutputType = {
    id: number
    createDate: number
    updateDate: number
    trafficSourceType: number
    externalId: number
    name: number
    externalStatus: number
    externalCreatedTime: number
    status: number
    balance: number
    externalCurrency: number
    externalTimezone: number
    spendCap: number
    amountSpent: number
    isActive: number
    trafficSourceOwnerBmId: number
    _all: number
  }


  export type TrafficSourceAccountAvgAggregateInputType = {
    id?: true
    balance?: true
    spendCap?: true
    amountSpent?: true
    trafficSourceOwnerBmId?: true
  }

  export type TrafficSourceAccountSumAggregateInputType = {
    id?: true
    balance?: true
    spendCap?: true
    amountSpent?: true
    trafficSourceOwnerBmId?: true
  }

  export type TrafficSourceAccountMinAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    trafficSourceType?: true
    externalId?: true
    name?: true
    externalStatus?: true
    externalCreatedTime?: true
    status?: true
    balance?: true
    externalCurrency?: true
    externalTimezone?: true
    spendCap?: true
    amountSpent?: true
    isActive?: true
    trafficSourceOwnerBmId?: true
  }

  export type TrafficSourceAccountMaxAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    trafficSourceType?: true
    externalId?: true
    name?: true
    externalStatus?: true
    externalCreatedTime?: true
    status?: true
    balance?: true
    externalCurrency?: true
    externalTimezone?: true
    spendCap?: true
    amountSpent?: true
    isActive?: true
    trafficSourceOwnerBmId?: true
  }

  export type TrafficSourceAccountCountAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    trafficSourceType?: true
    externalId?: true
    name?: true
    externalStatus?: true
    externalCreatedTime?: true
    status?: true
    balance?: true
    externalCurrency?: true
    externalTimezone?: true
    spendCap?: true
    amountSpent?: true
    isActive?: true
    trafficSourceOwnerBmId?: true
    _all?: true
  }

  export type TrafficSourceAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrafficSourceAccount to aggregate.
     */
    where?: TrafficSourceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceAccounts to fetch.
     */
    orderBy?: TrafficSourceAccountOrderByWithRelationInput | TrafficSourceAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrafficSourceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrafficSourceAccounts
    **/
    _count?: true | TrafficSourceAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrafficSourceAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrafficSourceAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrafficSourceAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrafficSourceAccountMaxAggregateInputType
  }

  export type GetTrafficSourceAccountAggregateType<T extends TrafficSourceAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateTrafficSourceAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrafficSourceAccount[P]>
      : GetScalarType<T[P], AggregateTrafficSourceAccount[P]>
  }




  export type TrafficSourceAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrafficSourceAccountWhereInput
    orderBy?: TrafficSourceAccountOrderByWithAggregationInput | TrafficSourceAccountOrderByWithAggregationInput[]
    by: TrafficSourceAccountScalarFieldEnum[] | TrafficSourceAccountScalarFieldEnum
    having?: TrafficSourceAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrafficSourceAccountCountAggregateInputType | true
    _avg?: TrafficSourceAccountAvgAggregateInputType
    _sum?: TrafficSourceAccountSumAggregateInputType
    _min?: TrafficSourceAccountMinAggregateInputType
    _max?: TrafficSourceAccountMaxAggregateInputType
  }

  export type TrafficSourceAccountGroupByOutputType = {
    id: number
    createDate: Date
    updateDate: Date
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    externalStatus: string
    externalCreatedTime: Date
    status: $Enums.TrafficSourceAccountStatus | null
    balance: Decimal
    externalCurrency: string
    externalTimezone: string
    spendCap: Decimal
    amountSpent: Decimal
    isActive: boolean
    trafficSourceOwnerBmId: number | null
    _count: TrafficSourceAccountCountAggregateOutputType | null
    _avg: TrafficSourceAccountAvgAggregateOutputType | null
    _sum: TrafficSourceAccountSumAggregateOutputType | null
    _min: TrafficSourceAccountMinAggregateOutputType | null
    _max: TrafficSourceAccountMaxAggregateOutputType | null
  }

  type GetTrafficSourceAccountGroupByPayload<T extends TrafficSourceAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrafficSourceAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrafficSourceAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrafficSourceAccountGroupByOutputType[P]>
            : GetScalarType<T[P], TrafficSourceAccountGroupByOutputType[P]>
        }
      >
    >


  export type TrafficSourceAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceType?: boolean
    externalId?: boolean
    name?: boolean
    externalStatus?: boolean
    externalCreatedTime?: boolean
    status?: boolean
    balance?: boolean
    externalCurrency?: boolean
    externalTimezone?: boolean
    spendCap?: boolean
    amountSpent?: boolean
    isActive?: boolean
    trafficSourceOwnerBmId?: boolean
    trafficSourceOwnerBm?: boolean | TrafficSourceAccount$trafficSourceOwnerBmArgs<ExtArgs>
    trafficSourceAccountToTrafficSourceBmConnections?: boolean | TrafficSourceAccount$trafficSourceAccountToTrafficSourceBmConnectionsArgs<ExtArgs>
    trafficSourceDailyAdStats?: boolean | TrafficSourceAccount$trafficSourceDailyAdStatsArgs<ExtArgs>
    _count?: boolean | TrafficSourceAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trafficSourceAccount"]>

  export type TrafficSourceAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceType?: boolean
    externalId?: boolean
    name?: boolean
    externalStatus?: boolean
    externalCreatedTime?: boolean
    status?: boolean
    balance?: boolean
    externalCurrency?: boolean
    externalTimezone?: boolean
    spendCap?: boolean
    amountSpent?: boolean
    isActive?: boolean
    trafficSourceOwnerBmId?: boolean
    trafficSourceOwnerBm?: boolean | TrafficSourceAccount$trafficSourceOwnerBmArgs<ExtArgs>
  }, ExtArgs["result"]["trafficSourceAccount"]>

  export type TrafficSourceAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceType?: boolean
    externalId?: boolean
    name?: boolean
    externalStatus?: boolean
    externalCreatedTime?: boolean
    status?: boolean
    balance?: boolean
    externalCurrency?: boolean
    externalTimezone?: boolean
    spendCap?: boolean
    amountSpent?: boolean
    isActive?: boolean
    trafficSourceOwnerBmId?: boolean
    trafficSourceOwnerBm?: boolean | TrafficSourceAccount$trafficSourceOwnerBmArgs<ExtArgs>
  }, ExtArgs["result"]["trafficSourceAccount"]>

  export type TrafficSourceAccountSelectScalar = {
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceType?: boolean
    externalId?: boolean
    name?: boolean
    externalStatus?: boolean
    externalCreatedTime?: boolean
    status?: boolean
    balance?: boolean
    externalCurrency?: boolean
    externalTimezone?: boolean
    spendCap?: boolean
    amountSpent?: boolean
    isActive?: boolean
    trafficSourceOwnerBmId?: boolean
  }

  export type TrafficSourceAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createDate" | "updateDate" | "trafficSourceType" | "externalId" | "name" | "externalStatus" | "externalCreatedTime" | "status" | "balance" | "externalCurrency" | "externalTimezone" | "spendCap" | "amountSpent" | "isActive" | "trafficSourceOwnerBmId", ExtArgs["result"]["trafficSourceAccount"]>
  export type TrafficSourceAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceOwnerBm?: boolean | TrafficSourceAccount$trafficSourceOwnerBmArgs<ExtArgs>
    trafficSourceAccountToTrafficSourceBmConnections?: boolean | TrafficSourceAccount$trafficSourceAccountToTrafficSourceBmConnectionsArgs<ExtArgs>
    trafficSourceDailyAdStats?: boolean | TrafficSourceAccount$trafficSourceDailyAdStatsArgs<ExtArgs>
    _count?: boolean | TrafficSourceAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrafficSourceAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceOwnerBm?: boolean | TrafficSourceAccount$trafficSourceOwnerBmArgs<ExtArgs>
  }
  export type TrafficSourceAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceOwnerBm?: boolean | TrafficSourceAccount$trafficSourceOwnerBmArgs<ExtArgs>
  }

  export type $TrafficSourceAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrafficSourceAccount"
    objects: {
      trafficSourceOwnerBm: Prisma.$TrafficSourceBmPayload<ExtArgs> | null
      trafficSourceAccountToTrafficSourceBmConnections: Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>[]
      trafficSourceDailyAdStats: Prisma.$TrafficSourceDailyAdStatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createDate: Date
      updateDate: Date
      trafficSourceType: $Enums.TrafficSourceType
      externalId: string
      name: string
      externalStatus: string
      externalCreatedTime: Date
      status: $Enums.TrafficSourceAccountStatus | null
      balance: Prisma.Decimal
      externalCurrency: string
      externalTimezone: string
      spendCap: Prisma.Decimal
      amountSpent: Prisma.Decimal
      isActive: boolean
      trafficSourceOwnerBmId: number | null
    }, ExtArgs["result"]["trafficSourceAccount"]>
    composites: {}
  }

  type TrafficSourceAccountGetPayload<S extends boolean | null | undefined | TrafficSourceAccountDefaultArgs> = $Result.GetResult<Prisma.$TrafficSourceAccountPayload, S>

  type TrafficSourceAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrafficSourceAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrafficSourceAccountCountAggregateInputType | true
    }

  export interface TrafficSourceAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrafficSourceAccount'], meta: { name: 'TrafficSourceAccount' } }
    /**
     * Find zero or one TrafficSourceAccount that matches the filter.
     * @param {TrafficSourceAccountFindUniqueArgs} args - Arguments to find a TrafficSourceAccount
     * @example
     * // Get one TrafficSourceAccount
     * const trafficSourceAccount = await prisma.trafficSourceAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrafficSourceAccountFindUniqueArgs>(args: SelectSubset<T, TrafficSourceAccountFindUniqueArgs<ExtArgs>>): Prisma__TrafficSourceAccountClient<$Result.GetResult<Prisma.$TrafficSourceAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrafficSourceAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrafficSourceAccountFindUniqueOrThrowArgs} args - Arguments to find a TrafficSourceAccount
     * @example
     * // Get one TrafficSourceAccount
     * const trafficSourceAccount = await prisma.trafficSourceAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrafficSourceAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, TrafficSourceAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrafficSourceAccountClient<$Result.GetResult<Prisma.$TrafficSourceAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrafficSourceAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceAccountFindFirstArgs} args - Arguments to find a TrafficSourceAccount
     * @example
     * // Get one TrafficSourceAccount
     * const trafficSourceAccount = await prisma.trafficSourceAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrafficSourceAccountFindFirstArgs>(args?: SelectSubset<T, TrafficSourceAccountFindFirstArgs<ExtArgs>>): Prisma__TrafficSourceAccountClient<$Result.GetResult<Prisma.$TrafficSourceAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrafficSourceAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceAccountFindFirstOrThrowArgs} args - Arguments to find a TrafficSourceAccount
     * @example
     * // Get one TrafficSourceAccount
     * const trafficSourceAccount = await prisma.trafficSourceAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrafficSourceAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, TrafficSourceAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrafficSourceAccountClient<$Result.GetResult<Prisma.$TrafficSourceAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrafficSourceAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrafficSourceAccounts
     * const trafficSourceAccounts = await prisma.trafficSourceAccount.findMany()
     * 
     * // Get first 10 TrafficSourceAccounts
     * const trafficSourceAccounts = await prisma.trafficSourceAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trafficSourceAccountWithIdOnly = await prisma.trafficSourceAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrafficSourceAccountFindManyArgs>(args?: SelectSubset<T, TrafficSourceAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrafficSourceAccount.
     * @param {TrafficSourceAccountCreateArgs} args - Arguments to create a TrafficSourceAccount.
     * @example
     * // Create one TrafficSourceAccount
     * const TrafficSourceAccount = await prisma.trafficSourceAccount.create({
     *   data: {
     *     // ... data to create a TrafficSourceAccount
     *   }
     * })
     * 
     */
    create<T extends TrafficSourceAccountCreateArgs>(args: SelectSubset<T, TrafficSourceAccountCreateArgs<ExtArgs>>): Prisma__TrafficSourceAccountClient<$Result.GetResult<Prisma.$TrafficSourceAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrafficSourceAccounts.
     * @param {TrafficSourceAccountCreateManyArgs} args - Arguments to create many TrafficSourceAccounts.
     * @example
     * // Create many TrafficSourceAccounts
     * const trafficSourceAccount = await prisma.trafficSourceAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrafficSourceAccountCreateManyArgs>(args?: SelectSubset<T, TrafficSourceAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrafficSourceAccounts and returns the data saved in the database.
     * @param {TrafficSourceAccountCreateManyAndReturnArgs} args - Arguments to create many TrafficSourceAccounts.
     * @example
     * // Create many TrafficSourceAccounts
     * const trafficSourceAccount = await prisma.trafficSourceAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrafficSourceAccounts and only return the `id`
     * const trafficSourceAccountWithIdOnly = await prisma.trafficSourceAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrafficSourceAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, TrafficSourceAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrafficSourceAccount.
     * @param {TrafficSourceAccountDeleteArgs} args - Arguments to delete one TrafficSourceAccount.
     * @example
     * // Delete one TrafficSourceAccount
     * const TrafficSourceAccount = await prisma.trafficSourceAccount.delete({
     *   where: {
     *     // ... filter to delete one TrafficSourceAccount
     *   }
     * })
     * 
     */
    delete<T extends TrafficSourceAccountDeleteArgs>(args: SelectSubset<T, TrafficSourceAccountDeleteArgs<ExtArgs>>): Prisma__TrafficSourceAccountClient<$Result.GetResult<Prisma.$TrafficSourceAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrafficSourceAccount.
     * @param {TrafficSourceAccountUpdateArgs} args - Arguments to update one TrafficSourceAccount.
     * @example
     * // Update one TrafficSourceAccount
     * const trafficSourceAccount = await prisma.trafficSourceAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrafficSourceAccountUpdateArgs>(args: SelectSubset<T, TrafficSourceAccountUpdateArgs<ExtArgs>>): Prisma__TrafficSourceAccountClient<$Result.GetResult<Prisma.$TrafficSourceAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrafficSourceAccounts.
     * @param {TrafficSourceAccountDeleteManyArgs} args - Arguments to filter TrafficSourceAccounts to delete.
     * @example
     * // Delete a few TrafficSourceAccounts
     * const { count } = await prisma.trafficSourceAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrafficSourceAccountDeleteManyArgs>(args?: SelectSubset<T, TrafficSourceAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrafficSourceAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrafficSourceAccounts
     * const trafficSourceAccount = await prisma.trafficSourceAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrafficSourceAccountUpdateManyArgs>(args: SelectSubset<T, TrafficSourceAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrafficSourceAccounts and returns the data updated in the database.
     * @param {TrafficSourceAccountUpdateManyAndReturnArgs} args - Arguments to update many TrafficSourceAccounts.
     * @example
     * // Update many TrafficSourceAccounts
     * const trafficSourceAccount = await prisma.trafficSourceAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrafficSourceAccounts and only return the `id`
     * const trafficSourceAccountWithIdOnly = await prisma.trafficSourceAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrafficSourceAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, TrafficSourceAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrafficSourceAccount.
     * @param {TrafficSourceAccountUpsertArgs} args - Arguments to update or create a TrafficSourceAccount.
     * @example
     * // Update or create a TrafficSourceAccount
     * const trafficSourceAccount = await prisma.trafficSourceAccount.upsert({
     *   create: {
     *     // ... data to create a TrafficSourceAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrafficSourceAccount we want to update
     *   }
     * })
     */
    upsert<T extends TrafficSourceAccountUpsertArgs>(args: SelectSubset<T, TrafficSourceAccountUpsertArgs<ExtArgs>>): Prisma__TrafficSourceAccountClient<$Result.GetResult<Prisma.$TrafficSourceAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrafficSourceAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceAccountCountArgs} args - Arguments to filter TrafficSourceAccounts to count.
     * @example
     * // Count the number of TrafficSourceAccounts
     * const count = await prisma.trafficSourceAccount.count({
     *   where: {
     *     // ... the filter for the TrafficSourceAccounts we want to count
     *   }
     * })
    **/
    count<T extends TrafficSourceAccountCountArgs>(
      args?: Subset<T, TrafficSourceAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrafficSourceAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrafficSourceAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrafficSourceAccountAggregateArgs>(args: Subset<T, TrafficSourceAccountAggregateArgs>): Prisma.PrismaPromise<GetTrafficSourceAccountAggregateType<T>>

    /**
     * Group by TrafficSourceAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrafficSourceAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrafficSourceAccountGroupByArgs['orderBy'] }
        : { orderBy?: TrafficSourceAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrafficSourceAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrafficSourceAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrafficSourceAccount model
   */
  readonly fields: TrafficSourceAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrafficSourceAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrafficSourceAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trafficSourceOwnerBm<T extends TrafficSourceAccount$trafficSourceOwnerBmArgs<ExtArgs> = {}>(args?: Subset<T, TrafficSourceAccount$trafficSourceOwnerBmArgs<ExtArgs>>): Prisma__TrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceBmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trafficSourceAccountToTrafficSourceBmConnections<T extends TrafficSourceAccount$trafficSourceAccountToTrafficSourceBmConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, TrafficSourceAccount$trafficSourceAccountToTrafficSourceBmConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trafficSourceDailyAdStats<T extends TrafficSourceAccount$trafficSourceDailyAdStatsArgs<ExtArgs> = {}>(args?: Subset<T, TrafficSourceAccount$trafficSourceDailyAdStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceDailyAdStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrafficSourceAccount model
   */
  interface TrafficSourceAccountFieldRefs {
    readonly id: FieldRef<"TrafficSourceAccount", 'Int'>
    readonly createDate: FieldRef<"TrafficSourceAccount", 'DateTime'>
    readonly updateDate: FieldRef<"TrafficSourceAccount", 'DateTime'>
    readonly trafficSourceType: FieldRef<"TrafficSourceAccount", 'TrafficSourceType'>
    readonly externalId: FieldRef<"TrafficSourceAccount", 'String'>
    readonly name: FieldRef<"TrafficSourceAccount", 'String'>
    readonly externalStatus: FieldRef<"TrafficSourceAccount", 'String'>
    readonly externalCreatedTime: FieldRef<"TrafficSourceAccount", 'DateTime'>
    readonly status: FieldRef<"TrafficSourceAccount", 'TrafficSourceAccountStatus'>
    readonly balance: FieldRef<"TrafficSourceAccount", 'Decimal'>
    readonly externalCurrency: FieldRef<"TrafficSourceAccount", 'String'>
    readonly externalTimezone: FieldRef<"TrafficSourceAccount", 'String'>
    readonly spendCap: FieldRef<"TrafficSourceAccount", 'Decimal'>
    readonly amountSpent: FieldRef<"TrafficSourceAccount", 'Decimal'>
    readonly isActive: FieldRef<"TrafficSourceAccount", 'Boolean'>
    readonly trafficSourceOwnerBmId: FieldRef<"TrafficSourceAccount", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TrafficSourceAccount findUnique
   */
  export type TrafficSourceAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccount
     */
    select?: TrafficSourceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccount
     */
    omit?: TrafficSourceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceAccount to fetch.
     */
    where: TrafficSourceAccountWhereUniqueInput
  }

  /**
   * TrafficSourceAccount findUniqueOrThrow
   */
  export type TrafficSourceAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccount
     */
    select?: TrafficSourceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccount
     */
    omit?: TrafficSourceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceAccount to fetch.
     */
    where: TrafficSourceAccountWhereUniqueInput
  }

  /**
   * TrafficSourceAccount findFirst
   */
  export type TrafficSourceAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccount
     */
    select?: TrafficSourceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccount
     */
    omit?: TrafficSourceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceAccount to fetch.
     */
    where?: TrafficSourceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceAccounts to fetch.
     */
    orderBy?: TrafficSourceAccountOrderByWithRelationInput | TrafficSourceAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrafficSourceAccounts.
     */
    cursor?: TrafficSourceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrafficSourceAccounts.
     */
    distinct?: TrafficSourceAccountScalarFieldEnum | TrafficSourceAccountScalarFieldEnum[]
  }

  /**
   * TrafficSourceAccount findFirstOrThrow
   */
  export type TrafficSourceAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccount
     */
    select?: TrafficSourceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccount
     */
    omit?: TrafficSourceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceAccount to fetch.
     */
    where?: TrafficSourceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceAccounts to fetch.
     */
    orderBy?: TrafficSourceAccountOrderByWithRelationInput | TrafficSourceAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrafficSourceAccounts.
     */
    cursor?: TrafficSourceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrafficSourceAccounts.
     */
    distinct?: TrafficSourceAccountScalarFieldEnum | TrafficSourceAccountScalarFieldEnum[]
  }

  /**
   * TrafficSourceAccount findMany
   */
  export type TrafficSourceAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccount
     */
    select?: TrafficSourceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccount
     */
    omit?: TrafficSourceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceAccounts to fetch.
     */
    where?: TrafficSourceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceAccounts to fetch.
     */
    orderBy?: TrafficSourceAccountOrderByWithRelationInput | TrafficSourceAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrafficSourceAccounts.
     */
    cursor?: TrafficSourceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceAccounts.
     */
    skip?: number
    distinct?: TrafficSourceAccountScalarFieldEnum | TrafficSourceAccountScalarFieldEnum[]
  }

  /**
   * TrafficSourceAccount create
   */
  export type TrafficSourceAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccount
     */
    select?: TrafficSourceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccount
     */
    omit?: TrafficSourceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a TrafficSourceAccount.
     */
    data: XOR<TrafficSourceAccountCreateInput, TrafficSourceAccountUncheckedCreateInput>
  }

  /**
   * TrafficSourceAccount createMany
   */
  export type TrafficSourceAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrafficSourceAccounts.
     */
    data: TrafficSourceAccountCreateManyInput | TrafficSourceAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrafficSourceAccount createManyAndReturn
   */
  export type TrafficSourceAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccount
     */
    select?: TrafficSourceAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccount
     */
    omit?: TrafficSourceAccountOmit<ExtArgs> | null
    /**
     * The data used to create many TrafficSourceAccounts.
     */
    data: TrafficSourceAccountCreateManyInput | TrafficSourceAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrafficSourceAccount update
   */
  export type TrafficSourceAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccount
     */
    select?: TrafficSourceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccount
     */
    omit?: TrafficSourceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a TrafficSourceAccount.
     */
    data: XOR<TrafficSourceAccountUpdateInput, TrafficSourceAccountUncheckedUpdateInput>
    /**
     * Choose, which TrafficSourceAccount to update.
     */
    where: TrafficSourceAccountWhereUniqueInput
  }

  /**
   * TrafficSourceAccount updateMany
   */
  export type TrafficSourceAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrafficSourceAccounts.
     */
    data: XOR<TrafficSourceAccountUpdateManyMutationInput, TrafficSourceAccountUncheckedUpdateManyInput>
    /**
     * Filter which TrafficSourceAccounts to update
     */
    where?: TrafficSourceAccountWhereInput
    /**
     * Limit how many TrafficSourceAccounts to update.
     */
    limit?: number
  }

  /**
   * TrafficSourceAccount updateManyAndReturn
   */
  export type TrafficSourceAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccount
     */
    select?: TrafficSourceAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccount
     */
    omit?: TrafficSourceAccountOmit<ExtArgs> | null
    /**
     * The data used to update TrafficSourceAccounts.
     */
    data: XOR<TrafficSourceAccountUpdateManyMutationInput, TrafficSourceAccountUncheckedUpdateManyInput>
    /**
     * Filter which TrafficSourceAccounts to update
     */
    where?: TrafficSourceAccountWhereInput
    /**
     * Limit how many TrafficSourceAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrafficSourceAccount upsert
   */
  export type TrafficSourceAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccount
     */
    select?: TrafficSourceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccount
     */
    omit?: TrafficSourceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the TrafficSourceAccount to update in case it exists.
     */
    where: TrafficSourceAccountWhereUniqueInput
    /**
     * In case the TrafficSourceAccount found by the `where` argument doesn't exist, create a new TrafficSourceAccount with this data.
     */
    create: XOR<TrafficSourceAccountCreateInput, TrafficSourceAccountUncheckedCreateInput>
    /**
     * In case the TrafficSourceAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrafficSourceAccountUpdateInput, TrafficSourceAccountUncheckedUpdateInput>
  }

  /**
   * TrafficSourceAccount delete
   */
  export type TrafficSourceAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccount
     */
    select?: TrafficSourceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccount
     */
    omit?: TrafficSourceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountInclude<ExtArgs> | null
    /**
     * Filter which TrafficSourceAccount to delete.
     */
    where: TrafficSourceAccountWhereUniqueInput
  }

  /**
   * TrafficSourceAccount deleteMany
   */
  export type TrafficSourceAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrafficSourceAccounts to delete
     */
    where?: TrafficSourceAccountWhereInput
    /**
     * Limit how many TrafficSourceAccounts to delete.
     */
    limit?: number
  }

  /**
   * TrafficSourceAccount.trafficSourceOwnerBm
   */
  export type TrafficSourceAccount$trafficSourceOwnerBmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBm
     */
    select?: TrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBm
     */
    omit?: TrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmInclude<ExtArgs> | null
    where?: TrafficSourceBmWhereInput
  }

  /**
   * TrafficSourceAccount.trafficSourceAccountToTrafficSourceBmConnections
   */
  export type TrafficSourceAccount$trafficSourceAccountToTrafficSourceBmConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccountToTrafficSourceBm
     */
    select?: TrafficSourceAccountToTrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccountToTrafficSourceBm
     */
    omit?: TrafficSourceAccountToTrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountToTrafficSourceBmInclude<ExtArgs> | null
    where?: TrafficSourceAccountToTrafficSourceBmWhereInput
    orderBy?: TrafficSourceAccountToTrafficSourceBmOrderByWithRelationInput | TrafficSourceAccountToTrafficSourceBmOrderByWithRelationInput[]
    cursor?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrafficSourceAccountToTrafficSourceBmScalarFieldEnum | TrafficSourceAccountToTrafficSourceBmScalarFieldEnum[]
  }

  /**
   * TrafficSourceAccount.trafficSourceDailyAdStats
   */
  export type TrafficSourceAccount$trafficSourceDailyAdStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceDailyAdStat
     */
    select?: TrafficSourceDailyAdStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceDailyAdStat
     */
    omit?: TrafficSourceDailyAdStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceDailyAdStatInclude<ExtArgs> | null
    where?: TrafficSourceDailyAdStatWhereInput
    orderBy?: TrafficSourceDailyAdStatOrderByWithRelationInput | TrafficSourceDailyAdStatOrderByWithRelationInput[]
    cursor?: TrafficSourceDailyAdStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrafficSourceDailyAdStatScalarFieldEnum | TrafficSourceDailyAdStatScalarFieldEnum[]
  }

  /**
   * TrafficSourceAccount without action
   */
  export type TrafficSourceAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccount
     */
    select?: TrafficSourceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccount
     */
    omit?: TrafficSourceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountInclude<ExtArgs> | null
  }


  /**
   * Model TrafficSourceAccountToTrafficSourceBm
   */

  export type AggregateTrafficSourceAccountToTrafficSourceBm = {
    _count: TrafficSourceAccountToTrafficSourceBmCountAggregateOutputType | null
    _avg: TrafficSourceAccountToTrafficSourceBmAvgAggregateOutputType | null
    _sum: TrafficSourceAccountToTrafficSourceBmSumAggregateOutputType | null
    _min: TrafficSourceAccountToTrafficSourceBmMinAggregateOutputType | null
    _max: TrafficSourceAccountToTrafficSourceBmMaxAggregateOutputType | null
  }

  export type TrafficSourceAccountToTrafficSourceBmAvgAggregateOutputType = {
    id: number | null
    trafficSourceBmId: number | null
    trafficSourceAccountId: number | null
  }

  export type TrafficSourceAccountToTrafficSourceBmSumAggregateOutputType = {
    id: number | null
    trafficSourceBmId: number | null
    trafficSourceAccountId: number | null
  }

  export type TrafficSourceAccountToTrafficSourceBmMinAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    trafficSourceBmId: number | null
    trafficSourceAccountId: number | null
  }

  export type TrafficSourceAccountToTrafficSourceBmMaxAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    trafficSourceBmId: number | null
    trafficSourceAccountId: number | null
  }

  export type TrafficSourceAccountToTrafficSourceBmCountAggregateOutputType = {
    id: number
    createDate: number
    updateDate: number
    trafficSourceBmId: number
    trafficSourceAccountId: number
    _all: number
  }


  export type TrafficSourceAccountToTrafficSourceBmAvgAggregateInputType = {
    id?: true
    trafficSourceBmId?: true
    trafficSourceAccountId?: true
  }

  export type TrafficSourceAccountToTrafficSourceBmSumAggregateInputType = {
    id?: true
    trafficSourceBmId?: true
    trafficSourceAccountId?: true
  }

  export type TrafficSourceAccountToTrafficSourceBmMinAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    trafficSourceBmId?: true
    trafficSourceAccountId?: true
  }

  export type TrafficSourceAccountToTrafficSourceBmMaxAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    trafficSourceBmId?: true
    trafficSourceAccountId?: true
  }

  export type TrafficSourceAccountToTrafficSourceBmCountAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    trafficSourceBmId?: true
    trafficSourceAccountId?: true
    _all?: true
  }

  export type TrafficSourceAccountToTrafficSourceBmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrafficSourceAccountToTrafficSourceBm to aggregate.
     */
    where?: TrafficSourceAccountToTrafficSourceBmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceAccountToTrafficSourceBms to fetch.
     */
    orderBy?: TrafficSourceAccountToTrafficSourceBmOrderByWithRelationInput | TrafficSourceAccountToTrafficSourceBmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceAccountToTrafficSourceBms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceAccountToTrafficSourceBms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrafficSourceAccountToTrafficSourceBms
    **/
    _count?: true | TrafficSourceAccountToTrafficSourceBmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrafficSourceAccountToTrafficSourceBmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrafficSourceAccountToTrafficSourceBmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrafficSourceAccountToTrafficSourceBmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrafficSourceAccountToTrafficSourceBmMaxAggregateInputType
  }

  export type GetTrafficSourceAccountToTrafficSourceBmAggregateType<T extends TrafficSourceAccountToTrafficSourceBmAggregateArgs> = {
        [P in keyof T & keyof AggregateTrafficSourceAccountToTrafficSourceBm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrafficSourceAccountToTrafficSourceBm[P]>
      : GetScalarType<T[P], AggregateTrafficSourceAccountToTrafficSourceBm[P]>
  }




  export type TrafficSourceAccountToTrafficSourceBmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrafficSourceAccountToTrafficSourceBmWhereInput
    orderBy?: TrafficSourceAccountToTrafficSourceBmOrderByWithAggregationInput | TrafficSourceAccountToTrafficSourceBmOrderByWithAggregationInput[]
    by: TrafficSourceAccountToTrafficSourceBmScalarFieldEnum[] | TrafficSourceAccountToTrafficSourceBmScalarFieldEnum
    having?: TrafficSourceAccountToTrafficSourceBmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrafficSourceAccountToTrafficSourceBmCountAggregateInputType | true
    _avg?: TrafficSourceAccountToTrafficSourceBmAvgAggregateInputType
    _sum?: TrafficSourceAccountToTrafficSourceBmSumAggregateInputType
    _min?: TrafficSourceAccountToTrafficSourceBmMinAggregateInputType
    _max?: TrafficSourceAccountToTrafficSourceBmMaxAggregateInputType
  }

  export type TrafficSourceAccountToTrafficSourceBmGroupByOutputType = {
    id: number
    createDate: Date
    updateDate: Date
    trafficSourceBmId: number
    trafficSourceAccountId: number
    _count: TrafficSourceAccountToTrafficSourceBmCountAggregateOutputType | null
    _avg: TrafficSourceAccountToTrafficSourceBmAvgAggregateOutputType | null
    _sum: TrafficSourceAccountToTrafficSourceBmSumAggregateOutputType | null
    _min: TrafficSourceAccountToTrafficSourceBmMinAggregateOutputType | null
    _max: TrafficSourceAccountToTrafficSourceBmMaxAggregateOutputType | null
  }

  type GetTrafficSourceAccountToTrafficSourceBmGroupByPayload<T extends TrafficSourceAccountToTrafficSourceBmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrafficSourceAccountToTrafficSourceBmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrafficSourceAccountToTrafficSourceBmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrafficSourceAccountToTrafficSourceBmGroupByOutputType[P]>
            : GetScalarType<T[P], TrafficSourceAccountToTrafficSourceBmGroupByOutputType[P]>
        }
      >
    >


  export type TrafficSourceAccountToTrafficSourceBmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceBmId?: boolean
    trafficSourceAccountId?: boolean
    trafficSourceBm?: boolean | TrafficSourceBmDefaultArgs<ExtArgs>
    trafficSourceAccount?: boolean | TrafficSourceAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trafficSourceAccountToTrafficSourceBm"]>

  export type TrafficSourceAccountToTrafficSourceBmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceBmId?: boolean
    trafficSourceAccountId?: boolean
    trafficSourceBm?: boolean | TrafficSourceBmDefaultArgs<ExtArgs>
    trafficSourceAccount?: boolean | TrafficSourceAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trafficSourceAccountToTrafficSourceBm"]>

  export type TrafficSourceAccountToTrafficSourceBmSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceBmId?: boolean
    trafficSourceAccountId?: boolean
    trafficSourceBm?: boolean | TrafficSourceBmDefaultArgs<ExtArgs>
    trafficSourceAccount?: boolean | TrafficSourceAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trafficSourceAccountToTrafficSourceBm"]>

  export type TrafficSourceAccountToTrafficSourceBmSelectScalar = {
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceBmId?: boolean
    trafficSourceAccountId?: boolean
  }

  export type TrafficSourceAccountToTrafficSourceBmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createDate" | "updateDate" | "trafficSourceBmId" | "trafficSourceAccountId", ExtArgs["result"]["trafficSourceAccountToTrafficSourceBm"]>
  export type TrafficSourceAccountToTrafficSourceBmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceBm?: boolean | TrafficSourceBmDefaultArgs<ExtArgs>
    trafficSourceAccount?: boolean | TrafficSourceAccountDefaultArgs<ExtArgs>
  }
  export type TrafficSourceAccountToTrafficSourceBmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceBm?: boolean | TrafficSourceBmDefaultArgs<ExtArgs>
    trafficSourceAccount?: boolean | TrafficSourceAccountDefaultArgs<ExtArgs>
  }
  export type TrafficSourceAccountToTrafficSourceBmIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceBm?: boolean | TrafficSourceBmDefaultArgs<ExtArgs>
    trafficSourceAccount?: boolean | TrafficSourceAccountDefaultArgs<ExtArgs>
  }

  export type $TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrafficSourceAccountToTrafficSourceBm"
    objects: {
      trafficSourceBm: Prisma.$TrafficSourceBmPayload<ExtArgs>
      trafficSourceAccount: Prisma.$TrafficSourceAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createDate: Date
      updateDate: Date
      trafficSourceBmId: number
      trafficSourceAccountId: number
    }, ExtArgs["result"]["trafficSourceAccountToTrafficSourceBm"]>
    composites: {}
  }

  type TrafficSourceAccountToTrafficSourceBmGetPayload<S extends boolean | null | undefined | TrafficSourceAccountToTrafficSourceBmDefaultArgs> = $Result.GetResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload, S>

  type TrafficSourceAccountToTrafficSourceBmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrafficSourceAccountToTrafficSourceBmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrafficSourceAccountToTrafficSourceBmCountAggregateInputType | true
    }

  export interface TrafficSourceAccountToTrafficSourceBmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrafficSourceAccountToTrafficSourceBm'], meta: { name: 'TrafficSourceAccountToTrafficSourceBm' } }
    /**
     * Find zero or one TrafficSourceAccountToTrafficSourceBm that matches the filter.
     * @param {TrafficSourceAccountToTrafficSourceBmFindUniqueArgs} args - Arguments to find a TrafficSourceAccountToTrafficSourceBm
     * @example
     * // Get one TrafficSourceAccountToTrafficSourceBm
     * const trafficSourceAccountToTrafficSourceBm = await prisma.trafficSourceAccountToTrafficSourceBm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrafficSourceAccountToTrafficSourceBmFindUniqueArgs>(args: SelectSubset<T, TrafficSourceAccountToTrafficSourceBmFindUniqueArgs<ExtArgs>>): Prisma__TrafficSourceAccountToTrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrafficSourceAccountToTrafficSourceBm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrafficSourceAccountToTrafficSourceBmFindUniqueOrThrowArgs} args - Arguments to find a TrafficSourceAccountToTrafficSourceBm
     * @example
     * // Get one TrafficSourceAccountToTrafficSourceBm
     * const trafficSourceAccountToTrafficSourceBm = await prisma.trafficSourceAccountToTrafficSourceBm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrafficSourceAccountToTrafficSourceBmFindUniqueOrThrowArgs>(args: SelectSubset<T, TrafficSourceAccountToTrafficSourceBmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrafficSourceAccountToTrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrafficSourceAccountToTrafficSourceBm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceAccountToTrafficSourceBmFindFirstArgs} args - Arguments to find a TrafficSourceAccountToTrafficSourceBm
     * @example
     * // Get one TrafficSourceAccountToTrafficSourceBm
     * const trafficSourceAccountToTrafficSourceBm = await prisma.trafficSourceAccountToTrafficSourceBm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrafficSourceAccountToTrafficSourceBmFindFirstArgs>(args?: SelectSubset<T, TrafficSourceAccountToTrafficSourceBmFindFirstArgs<ExtArgs>>): Prisma__TrafficSourceAccountToTrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrafficSourceAccountToTrafficSourceBm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceAccountToTrafficSourceBmFindFirstOrThrowArgs} args - Arguments to find a TrafficSourceAccountToTrafficSourceBm
     * @example
     * // Get one TrafficSourceAccountToTrafficSourceBm
     * const trafficSourceAccountToTrafficSourceBm = await prisma.trafficSourceAccountToTrafficSourceBm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrafficSourceAccountToTrafficSourceBmFindFirstOrThrowArgs>(args?: SelectSubset<T, TrafficSourceAccountToTrafficSourceBmFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrafficSourceAccountToTrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrafficSourceAccountToTrafficSourceBms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceAccountToTrafficSourceBmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrafficSourceAccountToTrafficSourceBms
     * const trafficSourceAccountToTrafficSourceBms = await prisma.trafficSourceAccountToTrafficSourceBm.findMany()
     * 
     * // Get first 10 TrafficSourceAccountToTrafficSourceBms
     * const trafficSourceAccountToTrafficSourceBms = await prisma.trafficSourceAccountToTrafficSourceBm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trafficSourceAccountToTrafficSourceBmWithIdOnly = await prisma.trafficSourceAccountToTrafficSourceBm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrafficSourceAccountToTrafficSourceBmFindManyArgs>(args?: SelectSubset<T, TrafficSourceAccountToTrafficSourceBmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrafficSourceAccountToTrafficSourceBm.
     * @param {TrafficSourceAccountToTrafficSourceBmCreateArgs} args - Arguments to create a TrafficSourceAccountToTrafficSourceBm.
     * @example
     * // Create one TrafficSourceAccountToTrafficSourceBm
     * const TrafficSourceAccountToTrafficSourceBm = await prisma.trafficSourceAccountToTrafficSourceBm.create({
     *   data: {
     *     // ... data to create a TrafficSourceAccountToTrafficSourceBm
     *   }
     * })
     * 
     */
    create<T extends TrafficSourceAccountToTrafficSourceBmCreateArgs>(args: SelectSubset<T, TrafficSourceAccountToTrafficSourceBmCreateArgs<ExtArgs>>): Prisma__TrafficSourceAccountToTrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrafficSourceAccountToTrafficSourceBms.
     * @param {TrafficSourceAccountToTrafficSourceBmCreateManyArgs} args - Arguments to create many TrafficSourceAccountToTrafficSourceBms.
     * @example
     * // Create many TrafficSourceAccountToTrafficSourceBms
     * const trafficSourceAccountToTrafficSourceBm = await prisma.trafficSourceAccountToTrafficSourceBm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrafficSourceAccountToTrafficSourceBmCreateManyArgs>(args?: SelectSubset<T, TrafficSourceAccountToTrafficSourceBmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrafficSourceAccountToTrafficSourceBms and returns the data saved in the database.
     * @param {TrafficSourceAccountToTrafficSourceBmCreateManyAndReturnArgs} args - Arguments to create many TrafficSourceAccountToTrafficSourceBms.
     * @example
     * // Create many TrafficSourceAccountToTrafficSourceBms
     * const trafficSourceAccountToTrafficSourceBm = await prisma.trafficSourceAccountToTrafficSourceBm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrafficSourceAccountToTrafficSourceBms and only return the `id`
     * const trafficSourceAccountToTrafficSourceBmWithIdOnly = await prisma.trafficSourceAccountToTrafficSourceBm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrafficSourceAccountToTrafficSourceBmCreateManyAndReturnArgs>(args?: SelectSubset<T, TrafficSourceAccountToTrafficSourceBmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrafficSourceAccountToTrafficSourceBm.
     * @param {TrafficSourceAccountToTrafficSourceBmDeleteArgs} args - Arguments to delete one TrafficSourceAccountToTrafficSourceBm.
     * @example
     * // Delete one TrafficSourceAccountToTrafficSourceBm
     * const TrafficSourceAccountToTrafficSourceBm = await prisma.trafficSourceAccountToTrafficSourceBm.delete({
     *   where: {
     *     // ... filter to delete one TrafficSourceAccountToTrafficSourceBm
     *   }
     * })
     * 
     */
    delete<T extends TrafficSourceAccountToTrafficSourceBmDeleteArgs>(args: SelectSubset<T, TrafficSourceAccountToTrafficSourceBmDeleteArgs<ExtArgs>>): Prisma__TrafficSourceAccountToTrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrafficSourceAccountToTrafficSourceBm.
     * @param {TrafficSourceAccountToTrafficSourceBmUpdateArgs} args - Arguments to update one TrafficSourceAccountToTrafficSourceBm.
     * @example
     * // Update one TrafficSourceAccountToTrafficSourceBm
     * const trafficSourceAccountToTrafficSourceBm = await prisma.trafficSourceAccountToTrafficSourceBm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrafficSourceAccountToTrafficSourceBmUpdateArgs>(args: SelectSubset<T, TrafficSourceAccountToTrafficSourceBmUpdateArgs<ExtArgs>>): Prisma__TrafficSourceAccountToTrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrafficSourceAccountToTrafficSourceBms.
     * @param {TrafficSourceAccountToTrafficSourceBmDeleteManyArgs} args - Arguments to filter TrafficSourceAccountToTrafficSourceBms to delete.
     * @example
     * // Delete a few TrafficSourceAccountToTrafficSourceBms
     * const { count } = await prisma.trafficSourceAccountToTrafficSourceBm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrafficSourceAccountToTrafficSourceBmDeleteManyArgs>(args?: SelectSubset<T, TrafficSourceAccountToTrafficSourceBmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrafficSourceAccountToTrafficSourceBms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceAccountToTrafficSourceBmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrafficSourceAccountToTrafficSourceBms
     * const trafficSourceAccountToTrafficSourceBm = await prisma.trafficSourceAccountToTrafficSourceBm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrafficSourceAccountToTrafficSourceBmUpdateManyArgs>(args: SelectSubset<T, TrafficSourceAccountToTrafficSourceBmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrafficSourceAccountToTrafficSourceBms and returns the data updated in the database.
     * @param {TrafficSourceAccountToTrafficSourceBmUpdateManyAndReturnArgs} args - Arguments to update many TrafficSourceAccountToTrafficSourceBms.
     * @example
     * // Update many TrafficSourceAccountToTrafficSourceBms
     * const trafficSourceAccountToTrafficSourceBm = await prisma.trafficSourceAccountToTrafficSourceBm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrafficSourceAccountToTrafficSourceBms and only return the `id`
     * const trafficSourceAccountToTrafficSourceBmWithIdOnly = await prisma.trafficSourceAccountToTrafficSourceBm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrafficSourceAccountToTrafficSourceBmUpdateManyAndReturnArgs>(args: SelectSubset<T, TrafficSourceAccountToTrafficSourceBmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrafficSourceAccountToTrafficSourceBm.
     * @param {TrafficSourceAccountToTrafficSourceBmUpsertArgs} args - Arguments to update or create a TrafficSourceAccountToTrafficSourceBm.
     * @example
     * // Update or create a TrafficSourceAccountToTrafficSourceBm
     * const trafficSourceAccountToTrafficSourceBm = await prisma.trafficSourceAccountToTrafficSourceBm.upsert({
     *   create: {
     *     // ... data to create a TrafficSourceAccountToTrafficSourceBm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrafficSourceAccountToTrafficSourceBm we want to update
     *   }
     * })
     */
    upsert<T extends TrafficSourceAccountToTrafficSourceBmUpsertArgs>(args: SelectSubset<T, TrafficSourceAccountToTrafficSourceBmUpsertArgs<ExtArgs>>): Prisma__TrafficSourceAccountToTrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrafficSourceAccountToTrafficSourceBms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceAccountToTrafficSourceBmCountArgs} args - Arguments to filter TrafficSourceAccountToTrafficSourceBms to count.
     * @example
     * // Count the number of TrafficSourceAccountToTrafficSourceBms
     * const count = await prisma.trafficSourceAccountToTrafficSourceBm.count({
     *   where: {
     *     // ... the filter for the TrafficSourceAccountToTrafficSourceBms we want to count
     *   }
     * })
    **/
    count<T extends TrafficSourceAccountToTrafficSourceBmCountArgs>(
      args?: Subset<T, TrafficSourceAccountToTrafficSourceBmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrafficSourceAccountToTrafficSourceBmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrafficSourceAccountToTrafficSourceBm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceAccountToTrafficSourceBmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrafficSourceAccountToTrafficSourceBmAggregateArgs>(args: Subset<T, TrafficSourceAccountToTrafficSourceBmAggregateArgs>): Prisma.PrismaPromise<GetTrafficSourceAccountToTrafficSourceBmAggregateType<T>>

    /**
     * Group by TrafficSourceAccountToTrafficSourceBm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceAccountToTrafficSourceBmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrafficSourceAccountToTrafficSourceBmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrafficSourceAccountToTrafficSourceBmGroupByArgs['orderBy'] }
        : { orderBy?: TrafficSourceAccountToTrafficSourceBmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrafficSourceAccountToTrafficSourceBmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrafficSourceAccountToTrafficSourceBmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrafficSourceAccountToTrafficSourceBm model
   */
  readonly fields: TrafficSourceAccountToTrafficSourceBmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrafficSourceAccountToTrafficSourceBm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrafficSourceAccountToTrafficSourceBmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trafficSourceBm<T extends TrafficSourceBmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrafficSourceBmDefaultArgs<ExtArgs>>): Prisma__TrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceBmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trafficSourceAccount<T extends TrafficSourceAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrafficSourceAccountDefaultArgs<ExtArgs>>): Prisma__TrafficSourceAccountClient<$Result.GetResult<Prisma.$TrafficSourceAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrafficSourceAccountToTrafficSourceBm model
   */
  interface TrafficSourceAccountToTrafficSourceBmFieldRefs {
    readonly id: FieldRef<"TrafficSourceAccountToTrafficSourceBm", 'Int'>
    readonly createDate: FieldRef<"TrafficSourceAccountToTrafficSourceBm", 'DateTime'>
    readonly updateDate: FieldRef<"TrafficSourceAccountToTrafficSourceBm", 'DateTime'>
    readonly trafficSourceBmId: FieldRef<"TrafficSourceAccountToTrafficSourceBm", 'Int'>
    readonly trafficSourceAccountId: FieldRef<"TrafficSourceAccountToTrafficSourceBm", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TrafficSourceAccountToTrafficSourceBm findUnique
   */
  export type TrafficSourceAccountToTrafficSourceBmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccountToTrafficSourceBm
     */
    select?: TrafficSourceAccountToTrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccountToTrafficSourceBm
     */
    omit?: TrafficSourceAccountToTrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountToTrafficSourceBmInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceAccountToTrafficSourceBm to fetch.
     */
    where: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
  }

  /**
   * TrafficSourceAccountToTrafficSourceBm findUniqueOrThrow
   */
  export type TrafficSourceAccountToTrafficSourceBmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccountToTrafficSourceBm
     */
    select?: TrafficSourceAccountToTrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccountToTrafficSourceBm
     */
    omit?: TrafficSourceAccountToTrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountToTrafficSourceBmInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceAccountToTrafficSourceBm to fetch.
     */
    where: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
  }

  /**
   * TrafficSourceAccountToTrafficSourceBm findFirst
   */
  export type TrafficSourceAccountToTrafficSourceBmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccountToTrafficSourceBm
     */
    select?: TrafficSourceAccountToTrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccountToTrafficSourceBm
     */
    omit?: TrafficSourceAccountToTrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountToTrafficSourceBmInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceAccountToTrafficSourceBm to fetch.
     */
    where?: TrafficSourceAccountToTrafficSourceBmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceAccountToTrafficSourceBms to fetch.
     */
    orderBy?: TrafficSourceAccountToTrafficSourceBmOrderByWithRelationInput | TrafficSourceAccountToTrafficSourceBmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrafficSourceAccountToTrafficSourceBms.
     */
    cursor?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceAccountToTrafficSourceBms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceAccountToTrafficSourceBms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrafficSourceAccountToTrafficSourceBms.
     */
    distinct?: TrafficSourceAccountToTrafficSourceBmScalarFieldEnum | TrafficSourceAccountToTrafficSourceBmScalarFieldEnum[]
  }

  /**
   * TrafficSourceAccountToTrafficSourceBm findFirstOrThrow
   */
  export type TrafficSourceAccountToTrafficSourceBmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccountToTrafficSourceBm
     */
    select?: TrafficSourceAccountToTrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccountToTrafficSourceBm
     */
    omit?: TrafficSourceAccountToTrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountToTrafficSourceBmInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceAccountToTrafficSourceBm to fetch.
     */
    where?: TrafficSourceAccountToTrafficSourceBmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceAccountToTrafficSourceBms to fetch.
     */
    orderBy?: TrafficSourceAccountToTrafficSourceBmOrderByWithRelationInput | TrafficSourceAccountToTrafficSourceBmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrafficSourceAccountToTrafficSourceBms.
     */
    cursor?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceAccountToTrafficSourceBms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceAccountToTrafficSourceBms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrafficSourceAccountToTrafficSourceBms.
     */
    distinct?: TrafficSourceAccountToTrafficSourceBmScalarFieldEnum | TrafficSourceAccountToTrafficSourceBmScalarFieldEnum[]
  }

  /**
   * TrafficSourceAccountToTrafficSourceBm findMany
   */
  export type TrafficSourceAccountToTrafficSourceBmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccountToTrafficSourceBm
     */
    select?: TrafficSourceAccountToTrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccountToTrafficSourceBm
     */
    omit?: TrafficSourceAccountToTrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountToTrafficSourceBmInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceAccountToTrafficSourceBms to fetch.
     */
    where?: TrafficSourceAccountToTrafficSourceBmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceAccountToTrafficSourceBms to fetch.
     */
    orderBy?: TrafficSourceAccountToTrafficSourceBmOrderByWithRelationInput | TrafficSourceAccountToTrafficSourceBmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrafficSourceAccountToTrafficSourceBms.
     */
    cursor?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceAccountToTrafficSourceBms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceAccountToTrafficSourceBms.
     */
    skip?: number
    distinct?: TrafficSourceAccountToTrafficSourceBmScalarFieldEnum | TrafficSourceAccountToTrafficSourceBmScalarFieldEnum[]
  }

  /**
   * TrafficSourceAccountToTrafficSourceBm create
   */
  export type TrafficSourceAccountToTrafficSourceBmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccountToTrafficSourceBm
     */
    select?: TrafficSourceAccountToTrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccountToTrafficSourceBm
     */
    omit?: TrafficSourceAccountToTrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountToTrafficSourceBmInclude<ExtArgs> | null
    /**
     * The data needed to create a TrafficSourceAccountToTrafficSourceBm.
     */
    data: XOR<TrafficSourceAccountToTrafficSourceBmCreateInput, TrafficSourceAccountToTrafficSourceBmUncheckedCreateInput>
  }

  /**
   * TrafficSourceAccountToTrafficSourceBm createMany
   */
  export type TrafficSourceAccountToTrafficSourceBmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrafficSourceAccountToTrafficSourceBms.
     */
    data: TrafficSourceAccountToTrafficSourceBmCreateManyInput | TrafficSourceAccountToTrafficSourceBmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrafficSourceAccountToTrafficSourceBm createManyAndReturn
   */
  export type TrafficSourceAccountToTrafficSourceBmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccountToTrafficSourceBm
     */
    select?: TrafficSourceAccountToTrafficSourceBmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccountToTrafficSourceBm
     */
    omit?: TrafficSourceAccountToTrafficSourceBmOmit<ExtArgs> | null
    /**
     * The data used to create many TrafficSourceAccountToTrafficSourceBms.
     */
    data: TrafficSourceAccountToTrafficSourceBmCreateManyInput | TrafficSourceAccountToTrafficSourceBmCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountToTrafficSourceBmIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrafficSourceAccountToTrafficSourceBm update
   */
  export type TrafficSourceAccountToTrafficSourceBmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccountToTrafficSourceBm
     */
    select?: TrafficSourceAccountToTrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccountToTrafficSourceBm
     */
    omit?: TrafficSourceAccountToTrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountToTrafficSourceBmInclude<ExtArgs> | null
    /**
     * The data needed to update a TrafficSourceAccountToTrafficSourceBm.
     */
    data: XOR<TrafficSourceAccountToTrafficSourceBmUpdateInput, TrafficSourceAccountToTrafficSourceBmUncheckedUpdateInput>
    /**
     * Choose, which TrafficSourceAccountToTrafficSourceBm to update.
     */
    where: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
  }

  /**
   * TrafficSourceAccountToTrafficSourceBm updateMany
   */
  export type TrafficSourceAccountToTrafficSourceBmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrafficSourceAccountToTrafficSourceBms.
     */
    data: XOR<TrafficSourceAccountToTrafficSourceBmUpdateManyMutationInput, TrafficSourceAccountToTrafficSourceBmUncheckedUpdateManyInput>
    /**
     * Filter which TrafficSourceAccountToTrafficSourceBms to update
     */
    where?: TrafficSourceAccountToTrafficSourceBmWhereInput
    /**
     * Limit how many TrafficSourceAccountToTrafficSourceBms to update.
     */
    limit?: number
  }

  /**
   * TrafficSourceAccountToTrafficSourceBm updateManyAndReturn
   */
  export type TrafficSourceAccountToTrafficSourceBmUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccountToTrafficSourceBm
     */
    select?: TrafficSourceAccountToTrafficSourceBmSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccountToTrafficSourceBm
     */
    omit?: TrafficSourceAccountToTrafficSourceBmOmit<ExtArgs> | null
    /**
     * The data used to update TrafficSourceAccountToTrafficSourceBms.
     */
    data: XOR<TrafficSourceAccountToTrafficSourceBmUpdateManyMutationInput, TrafficSourceAccountToTrafficSourceBmUncheckedUpdateManyInput>
    /**
     * Filter which TrafficSourceAccountToTrafficSourceBms to update
     */
    where?: TrafficSourceAccountToTrafficSourceBmWhereInput
    /**
     * Limit how many TrafficSourceAccountToTrafficSourceBms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountToTrafficSourceBmIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrafficSourceAccountToTrafficSourceBm upsert
   */
  export type TrafficSourceAccountToTrafficSourceBmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccountToTrafficSourceBm
     */
    select?: TrafficSourceAccountToTrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccountToTrafficSourceBm
     */
    omit?: TrafficSourceAccountToTrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountToTrafficSourceBmInclude<ExtArgs> | null
    /**
     * The filter to search for the TrafficSourceAccountToTrafficSourceBm to update in case it exists.
     */
    where: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
    /**
     * In case the TrafficSourceAccountToTrafficSourceBm found by the `where` argument doesn't exist, create a new TrafficSourceAccountToTrafficSourceBm with this data.
     */
    create: XOR<TrafficSourceAccountToTrafficSourceBmCreateInput, TrafficSourceAccountToTrafficSourceBmUncheckedCreateInput>
    /**
     * In case the TrafficSourceAccountToTrafficSourceBm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrafficSourceAccountToTrafficSourceBmUpdateInput, TrafficSourceAccountToTrafficSourceBmUncheckedUpdateInput>
  }

  /**
   * TrafficSourceAccountToTrafficSourceBm delete
   */
  export type TrafficSourceAccountToTrafficSourceBmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccountToTrafficSourceBm
     */
    select?: TrafficSourceAccountToTrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccountToTrafficSourceBm
     */
    omit?: TrafficSourceAccountToTrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountToTrafficSourceBmInclude<ExtArgs> | null
    /**
     * Filter which TrafficSourceAccountToTrafficSourceBm to delete.
     */
    where: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
  }

  /**
   * TrafficSourceAccountToTrafficSourceBm deleteMany
   */
  export type TrafficSourceAccountToTrafficSourceBmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrafficSourceAccountToTrafficSourceBms to delete
     */
    where?: TrafficSourceAccountToTrafficSourceBmWhereInput
    /**
     * Limit how many TrafficSourceAccountToTrafficSourceBms to delete.
     */
    limit?: number
  }

  /**
   * TrafficSourceAccountToTrafficSourceBm without action
   */
  export type TrafficSourceAccountToTrafficSourceBmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccountToTrafficSourceBm
     */
    select?: TrafficSourceAccountToTrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccountToTrafficSourceBm
     */
    omit?: TrafficSourceAccountToTrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountToTrafficSourceBmInclude<ExtArgs> | null
  }


  /**
   * Model TrafficSourceBm
   */

  export type AggregateTrafficSourceBm = {
    _count: TrafficSourceBmCountAggregateOutputType | null
    _avg: TrafficSourceBmAvgAggregateOutputType | null
    _sum: TrafficSourceBmSumAggregateOutputType | null
    _min: TrafficSourceBmMinAggregateOutputType | null
    _max: TrafficSourceBmMaxAggregateOutputType | null
  }

  export type TrafficSourceBmAvgAggregateOutputType = {
    id: number | null
  }

  export type TrafficSourceBmSumAggregateOutputType = {
    id: number | null
  }

  export type TrafficSourceBmMinAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    trafficSourceType: $Enums.TrafficSourceType | null
    externalId: string | null
    name: string | null
    isActive: boolean | null
  }

  export type TrafficSourceBmMaxAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    trafficSourceType: $Enums.TrafficSourceType | null
    externalId: string | null
    name: string | null
    isActive: boolean | null
  }

  export type TrafficSourceBmCountAggregateOutputType = {
    id: number
    createDate: number
    updateDate: number
    trafficSourceType: number
    externalId: number
    name: number
    isActive: number
    _all: number
  }


  export type TrafficSourceBmAvgAggregateInputType = {
    id?: true
  }

  export type TrafficSourceBmSumAggregateInputType = {
    id?: true
  }

  export type TrafficSourceBmMinAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    trafficSourceType?: true
    externalId?: true
    name?: true
    isActive?: true
  }

  export type TrafficSourceBmMaxAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    trafficSourceType?: true
    externalId?: true
    name?: true
    isActive?: true
  }

  export type TrafficSourceBmCountAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    trafficSourceType?: true
    externalId?: true
    name?: true
    isActive?: true
    _all?: true
  }

  export type TrafficSourceBmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrafficSourceBm to aggregate.
     */
    where?: TrafficSourceBmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceBms to fetch.
     */
    orderBy?: TrafficSourceBmOrderByWithRelationInput | TrafficSourceBmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrafficSourceBmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceBms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceBms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrafficSourceBms
    **/
    _count?: true | TrafficSourceBmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrafficSourceBmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrafficSourceBmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrafficSourceBmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrafficSourceBmMaxAggregateInputType
  }

  export type GetTrafficSourceBmAggregateType<T extends TrafficSourceBmAggregateArgs> = {
        [P in keyof T & keyof AggregateTrafficSourceBm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrafficSourceBm[P]>
      : GetScalarType<T[P], AggregateTrafficSourceBm[P]>
  }




  export type TrafficSourceBmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrafficSourceBmWhereInput
    orderBy?: TrafficSourceBmOrderByWithAggregationInput | TrafficSourceBmOrderByWithAggregationInput[]
    by: TrafficSourceBmScalarFieldEnum[] | TrafficSourceBmScalarFieldEnum
    having?: TrafficSourceBmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrafficSourceBmCountAggregateInputType | true
    _avg?: TrafficSourceBmAvgAggregateInputType
    _sum?: TrafficSourceBmSumAggregateInputType
    _min?: TrafficSourceBmMinAggregateInputType
    _max?: TrafficSourceBmMaxAggregateInputType
  }

  export type TrafficSourceBmGroupByOutputType = {
    id: number
    createDate: Date
    updateDate: Date
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    isActive: boolean
    _count: TrafficSourceBmCountAggregateOutputType | null
    _avg: TrafficSourceBmAvgAggregateOutputType | null
    _sum: TrafficSourceBmSumAggregateOutputType | null
    _min: TrafficSourceBmMinAggregateOutputType | null
    _max: TrafficSourceBmMaxAggregateOutputType | null
  }

  type GetTrafficSourceBmGroupByPayload<T extends TrafficSourceBmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrafficSourceBmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrafficSourceBmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrafficSourceBmGroupByOutputType[P]>
            : GetScalarType<T[P], TrafficSourceBmGroupByOutputType[P]>
        }
      >
    >


  export type TrafficSourceBmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceType?: boolean
    externalId?: boolean
    name?: boolean
    isActive?: boolean
    trafficSourceBmToApiAccessConnections?: boolean | TrafficSourceBm$trafficSourceBmToApiAccessConnectionsArgs<ExtArgs>
    trafficSourceAccountToTrafficSourceBmConnections?: boolean | TrafficSourceBm$trafficSourceAccountToTrafficSourceBmConnectionsArgs<ExtArgs>
    accountsOwned?: boolean | TrafficSourceBm$accountsOwnedArgs<ExtArgs>
    _count?: boolean | TrafficSourceBmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trafficSourceBm"]>

  export type TrafficSourceBmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceType?: boolean
    externalId?: boolean
    name?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["trafficSourceBm"]>

  export type TrafficSourceBmSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceType?: boolean
    externalId?: boolean
    name?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["trafficSourceBm"]>

  export type TrafficSourceBmSelectScalar = {
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceType?: boolean
    externalId?: boolean
    name?: boolean
    isActive?: boolean
  }

  export type TrafficSourceBmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createDate" | "updateDate" | "trafficSourceType" | "externalId" | "name" | "isActive", ExtArgs["result"]["trafficSourceBm"]>
  export type TrafficSourceBmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceBmToApiAccessConnections?: boolean | TrafficSourceBm$trafficSourceBmToApiAccessConnectionsArgs<ExtArgs>
    trafficSourceAccountToTrafficSourceBmConnections?: boolean | TrafficSourceBm$trafficSourceAccountToTrafficSourceBmConnectionsArgs<ExtArgs>
    accountsOwned?: boolean | TrafficSourceBm$accountsOwnedArgs<ExtArgs>
    _count?: boolean | TrafficSourceBmCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrafficSourceBmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TrafficSourceBmIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TrafficSourceBmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrafficSourceBm"
    objects: {
      trafficSourceBmToApiAccessConnections: Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>[]
      trafficSourceAccountToTrafficSourceBmConnections: Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>[]
      accountsOwned: Prisma.$TrafficSourceAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createDate: Date
      updateDate: Date
      trafficSourceType: $Enums.TrafficSourceType
      externalId: string
      name: string
      isActive: boolean
    }, ExtArgs["result"]["trafficSourceBm"]>
    composites: {}
  }

  type TrafficSourceBmGetPayload<S extends boolean | null | undefined | TrafficSourceBmDefaultArgs> = $Result.GetResult<Prisma.$TrafficSourceBmPayload, S>

  type TrafficSourceBmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrafficSourceBmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrafficSourceBmCountAggregateInputType | true
    }

  export interface TrafficSourceBmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrafficSourceBm'], meta: { name: 'TrafficSourceBm' } }
    /**
     * Find zero or one TrafficSourceBm that matches the filter.
     * @param {TrafficSourceBmFindUniqueArgs} args - Arguments to find a TrafficSourceBm
     * @example
     * // Get one TrafficSourceBm
     * const trafficSourceBm = await prisma.trafficSourceBm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrafficSourceBmFindUniqueArgs>(args: SelectSubset<T, TrafficSourceBmFindUniqueArgs<ExtArgs>>): Prisma__TrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceBmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrafficSourceBm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrafficSourceBmFindUniqueOrThrowArgs} args - Arguments to find a TrafficSourceBm
     * @example
     * // Get one TrafficSourceBm
     * const trafficSourceBm = await prisma.trafficSourceBm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrafficSourceBmFindUniqueOrThrowArgs>(args: SelectSubset<T, TrafficSourceBmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceBmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrafficSourceBm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceBmFindFirstArgs} args - Arguments to find a TrafficSourceBm
     * @example
     * // Get one TrafficSourceBm
     * const trafficSourceBm = await prisma.trafficSourceBm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrafficSourceBmFindFirstArgs>(args?: SelectSubset<T, TrafficSourceBmFindFirstArgs<ExtArgs>>): Prisma__TrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceBmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrafficSourceBm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceBmFindFirstOrThrowArgs} args - Arguments to find a TrafficSourceBm
     * @example
     * // Get one TrafficSourceBm
     * const trafficSourceBm = await prisma.trafficSourceBm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrafficSourceBmFindFirstOrThrowArgs>(args?: SelectSubset<T, TrafficSourceBmFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceBmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrafficSourceBms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceBmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrafficSourceBms
     * const trafficSourceBms = await prisma.trafficSourceBm.findMany()
     * 
     * // Get first 10 TrafficSourceBms
     * const trafficSourceBms = await prisma.trafficSourceBm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trafficSourceBmWithIdOnly = await prisma.trafficSourceBm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrafficSourceBmFindManyArgs>(args?: SelectSubset<T, TrafficSourceBmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceBmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrafficSourceBm.
     * @param {TrafficSourceBmCreateArgs} args - Arguments to create a TrafficSourceBm.
     * @example
     * // Create one TrafficSourceBm
     * const TrafficSourceBm = await prisma.trafficSourceBm.create({
     *   data: {
     *     // ... data to create a TrafficSourceBm
     *   }
     * })
     * 
     */
    create<T extends TrafficSourceBmCreateArgs>(args: SelectSubset<T, TrafficSourceBmCreateArgs<ExtArgs>>): Prisma__TrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceBmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrafficSourceBms.
     * @param {TrafficSourceBmCreateManyArgs} args - Arguments to create many TrafficSourceBms.
     * @example
     * // Create many TrafficSourceBms
     * const trafficSourceBm = await prisma.trafficSourceBm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrafficSourceBmCreateManyArgs>(args?: SelectSubset<T, TrafficSourceBmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrafficSourceBms and returns the data saved in the database.
     * @param {TrafficSourceBmCreateManyAndReturnArgs} args - Arguments to create many TrafficSourceBms.
     * @example
     * // Create many TrafficSourceBms
     * const trafficSourceBm = await prisma.trafficSourceBm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrafficSourceBms and only return the `id`
     * const trafficSourceBmWithIdOnly = await prisma.trafficSourceBm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrafficSourceBmCreateManyAndReturnArgs>(args?: SelectSubset<T, TrafficSourceBmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceBmPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrafficSourceBm.
     * @param {TrafficSourceBmDeleteArgs} args - Arguments to delete one TrafficSourceBm.
     * @example
     * // Delete one TrafficSourceBm
     * const TrafficSourceBm = await prisma.trafficSourceBm.delete({
     *   where: {
     *     // ... filter to delete one TrafficSourceBm
     *   }
     * })
     * 
     */
    delete<T extends TrafficSourceBmDeleteArgs>(args: SelectSubset<T, TrafficSourceBmDeleteArgs<ExtArgs>>): Prisma__TrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceBmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrafficSourceBm.
     * @param {TrafficSourceBmUpdateArgs} args - Arguments to update one TrafficSourceBm.
     * @example
     * // Update one TrafficSourceBm
     * const trafficSourceBm = await prisma.trafficSourceBm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrafficSourceBmUpdateArgs>(args: SelectSubset<T, TrafficSourceBmUpdateArgs<ExtArgs>>): Prisma__TrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceBmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrafficSourceBms.
     * @param {TrafficSourceBmDeleteManyArgs} args - Arguments to filter TrafficSourceBms to delete.
     * @example
     * // Delete a few TrafficSourceBms
     * const { count } = await prisma.trafficSourceBm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrafficSourceBmDeleteManyArgs>(args?: SelectSubset<T, TrafficSourceBmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrafficSourceBms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceBmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrafficSourceBms
     * const trafficSourceBm = await prisma.trafficSourceBm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrafficSourceBmUpdateManyArgs>(args: SelectSubset<T, TrafficSourceBmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrafficSourceBms and returns the data updated in the database.
     * @param {TrafficSourceBmUpdateManyAndReturnArgs} args - Arguments to update many TrafficSourceBms.
     * @example
     * // Update many TrafficSourceBms
     * const trafficSourceBm = await prisma.trafficSourceBm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrafficSourceBms and only return the `id`
     * const trafficSourceBmWithIdOnly = await prisma.trafficSourceBm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrafficSourceBmUpdateManyAndReturnArgs>(args: SelectSubset<T, TrafficSourceBmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceBmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrafficSourceBm.
     * @param {TrafficSourceBmUpsertArgs} args - Arguments to update or create a TrafficSourceBm.
     * @example
     * // Update or create a TrafficSourceBm
     * const trafficSourceBm = await prisma.trafficSourceBm.upsert({
     *   create: {
     *     // ... data to create a TrafficSourceBm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrafficSourceBm we want to update
     *   }
     * })
     */
    upsert<T extends TrafficSourceBmUpsertArgs>(args: SelectSubset<T, TrafficSourceBmUpsertArgs<ExtArgs>>): Prisma__TrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceBmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrafficSourceBms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceBmCountArgs} args - Arguments to filter TrafficSourceBms to count.
     * @example
     * // Count the number of TrafficSourceBms
     * const count = await prisma.trafficSourceBm.count({
     *   where: {
     *     // ... the filter for the TrafficSourceBms we want to count
     *   }
     * })
    **/
    count<T extends TrafficSourceBmCountArgs>(
      args?: Subset<T, TrafficSourceBmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrafficSourceBmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrafficSourceBm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceBmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrafficSourceBmAggregateArgs>(args: Subset<T, TrafficSourceBmAggregateArgs>): Prisma.PrismaPromise<GetTrafficSourceBmAggregateType<T>>

    /**
     * Group by TrafficSourceBm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceBmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrafficSourceBmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrafficSourceBmGroupByArgs['orderBy'] }
        : { orderBy?: TrafficSourceBmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrafficSourceBmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrafficSourceBmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrafficSourceBm model
   */
  readonly fields: TrafficSourceBmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrafficSourceBm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrafficSourceBmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trafficSourceBmToApiAccessConnections<T extends TrafficSourceBm$trafficSourceBmToApiAccessConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, TrafficSourceBm$trafficSourceBmToApiAccessConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trafficSourceAccountToTrafficSourceBmConnections<T extends TrafficSourceBm$trafficSourceAccountToTrafficSourceBmConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, TrafficSourceBm$trafficSourceAccountToTrafficSourceBmConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceAccountToTrafficSourceBmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accountsOwned<T extends TrafficSourceBm$accountsOwnedArgs<ExtArgs> = {}>(args?: Subset<T, TrafficSourceBm$accountsOwnedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrafficSourceBm model
   */
  interface TrafficSourceBmFieldRefs {
    readonly id: FieldRef<"TrafficSourceBm", 'Int'>
    readonly createDate: FieldRef<"TrafficSourceBm", 'DateTime'>
    readonly updateDate: FieldRef<"TrafficSourceBm", 'DateTime'>
    readonly trafficSourceType: FieldRef<"TrafficSourceBm", 'TrafficSourceType'>
    readonly externalId: FieldRef<"TrafficSourceBm", 'String'>
    readonly name: FieldRef<"TrafficSourceBm", 'String'>
    readonly isActive: FieldRef<"TrafficSourceBm", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TrafficSourceBm findUnique
   */
  export type TrafficSourceBmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBm
     */
    select?: TrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBm
     */
    omit?: TrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceBm to fetch.
     */
    where: TrafficSourceBmWhereUniqueInput
  }

  /**
   * TrafficSourceBm findUniqueOrThrow
   */
  export type TrafficSourceBmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBm
     */
    select?: TrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBm
     */
    omit?: TrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceBm to fetch.
     */
    where: TrafficSourceBmWhereUniqueInput
  }

  /**
   * TrafficSourceBm findFirst
   */
  export type TrafficSourceBmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBm
     */
    select?: TrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBm
     */
    omit?: TrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceBm to fetch.
     */
    where?: TrafficSourceBmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceBms to fetch.
     */
    orderBy?: TrafficSourceBmOrderByWithRelationInput | TrafficSourceBmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrafficSourceBms.
     */
    cursor?: TrafficSourceBmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceBms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceBms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrafficSourceBms.
     */
    distinct?: TrafficSourceBmScalarFieldEnum | TrafficSourceBmScalarFieldEnum[]
  }

  /**
   * TrafficSourceBm findFirstOrThrow
   */
  export type TrafficSourceBmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBm
     */
    select?: TrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBm
     */
    omit?: TrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceBm to fetch.
     */
    where?: TrafficSourceBmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceBms to fetch.
     */
    orderBy?: TrafficSourceBmOrderByWithRelationInput | TrafficSourceBmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrafficSourceBms.
     */
    cursor?: TrafficSourceBmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceBms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceBms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrafficSourceBms.
     */
    distinct?: TrafficSourceBmScalarFieldEnum | TrafficSourceBmScalarFieldEnum[]
  }

  /**
   * TrafficSourceBm findMany
   */
  export type TrafficSourceBmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBm
     */
    select?: TrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBm
     */
    omit?: TrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceBms to fetch.
     */
    where?: TrafficSourceBmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceBms to fetch.
     */
    orderBy?: TrafficSourceBmOrderByWithRelationInput | TrafficSourceBmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrafficSourceBms.
     */
    cursor?: TrafficSourceBmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceBms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceBms.
     */
    skip?: number
    distinct?: TrafficSourceBmScalarFieldEnum | TrafficSourceBmScalarFieldEnum[]
  }

  /**
   * TrafficSourceBm create
   */
  export type TrafficSourceBmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBm
     */
    select?: TrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBm
     */
    omit?: TrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmInclude<ExtArgs> | null
    /**
     * The data needed to create a TrafficSourceBm.
     */
    data: XOR<TrafficSourceBmCreateInput, TrafficSourceBmUncheckedCreateInput>
  }

  /**
   * TrafficSourceBm createMany
   */
  export type TrafficSourceBmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrafficSourceBms.
     */
    data: TrafficSourceBmCreateManyInput | TrafficSourceBmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrafficSourceBm createManyAndReturn
   */
  export type TrafficSourceBmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBm
     */
    select?: TrafficSourceBmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBm
     */
    omit?: TrafficSourceBmOmit<ExtArgs> | null
    /**
     * The data used to create many TrafficSourceBms.
     */
    data: TrafficSourceBmCreateManyInput | TrafficSourceBmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrafficSourceBm update
   */
  export type TrafficSourceBmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBm
     */
    select?: TrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBm
     */
    omit?: TrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmInclude<ExtArgs> | null
    /**
     * The data needed to update a TrafficSourceBm.
     */
    data: XOR<TrafficSourceBmUpdateInput, TrafficSourceBmUncheckedUpdateInput>
    /**
     * Choose, which TrafficSourceBm to update.
     */
    where: TrafficSourceBmWhereUniqueInput
  }

  /**
   * TrafficSourceBm updateMany
   */
  export type TrafficSourceBmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrafficSourceBms.
     */
    data: XOR<TrafficSourceBmUpdateManyMutationInput, TrafficSourceBmUncheckedUpdateManyInput>
    /**
     * Filter which TrafficSourceBms to update
     */
    where?: TrafficSourceBmWhereInput
    /**
     * Limit how many TrafficSourceBms to update.
     */
    limit?: number
  }

  /**
   * TrafficSourceBm updateManyAndReturn
   */
  export type TrafficSourceBmUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBm
     */
    select?: TrafficSourceBmSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBm
     */
    omit?: TrafficSourceBmOmit<ExtArgs> | null
    /**
     * The data used to update TrafficSourceBms.
     */
    data: XOR<TrafficSourceBmUpdateManyMutationInput, TrafficSourceBmUncheckedUpdateManyInput>
    /**
     * Filter which TrafficSourceBms to update
     */
    where?: TrafficSourceBmWhereInput
    /**
     * Limit how many TrafficSourceBms to update.
     */
    limit?: number
  }

  /**
   * TrafficSourceBm upsert
   */
  export type TrafficSourceBmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBm
     */
    select?: TrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBm
     */
    omit?: TrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmInclude<ExtArgs> | null
    /**
     * The filter to search for the TrafficSourceBm to update in case it exists.
     */
    where: TrafficSourceBmWhereUniqueInput
    /**
     * In case the TrafficSourceBm found by the `where` argument doesn't exist, create a new TrafficSourceBm with this data.
     */
    create: XOR<TrafficSourceBmCreateInput, TrafficSourceBmUncheckedCreateInput>
    /**
     * In case the TrafficSourceBm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrafficSourceBmUpdateInput, TrafficSourceBmUncheckedUpdateInput>
  }

  /**
   * TrafficSourceBm delete
   */
  export type TrafficSourceBmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBm
     */
    select?: TrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBm
     */
    omit?: TrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmInclude<ExtArgs> | null
    /**
     * Filter which TrafficSourceBm to delete.
     */
    where: TrafficSourceBmWhereUniqueInput
  }

  /**
   * TrafficSourceBm deleteMany
   */
  export type TrafficSourceBmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrafficSourceBms to delete
     */
    where?: TrafficSourceBmWhereInput
    /**
     * Limit how many TrafficSourceBms to delete.
     */
    limit?: number
  }

  /**
   * TrafficSourceBm.trafficSourceBmToApiAccessConnections
   */
  export type TrafficSourceBm$trafficSourceBmToApiAccessConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBmToApiAccess
     */
    select?: TrafficSourceBmToApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBmToApiAccess
     */
    omit?: TrafficSourceBmToApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmToApiAccessInclude<ExtArgs> | null
    where?: TrafficSourceBmToApiAccessWhereInput
    orderBy?: TrafficSourceBmToApiAccessOrderByWithRelationInput | TrafficSourceBmToApiAccessOrderByWithRelationInput[]
    cursor?: TrafficSourceBmToApiAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrafficSourceBmToApiAccessScalarFieldEnum | TrafficSourceBmToApiAccessScalarFieldEnum[]
  }

  /**
   * TrafficSourceBm.trafficSourceAccountToTrafficSourceBmConnections
   */
  export type TrafficSourceBm$trafficSourceAccountToTrafficSourceBmConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccountToTrafficSourceBm
     */
    select?: TrafficSourceAccountToTrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccountToTrafficSourceBm
     */
    omit?: TrafficSourceAccountToTrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountToTrafficSourceBmInclude<ExtArgs> | null
    where?: TrafficSourceAccountToTrafficSourceBmWhereInput
    orderBy?: TrafficSourceAccountToTrafficSourceBmOrderByWithRelationInput | TrafficSourceAccountToTrafficSourceBmOrderByWithRelationInput[]
    cursor?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrafficSourceAccountToTrafficSourceBmScalarFieldEnum | TrafficSourceAccountToTrafficSourceBmScalarFieldEnum[]
  }

  /**
   * TrafficSourceBm.accountsOwned
   */
  export type TrafficSourceBm$accountsOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceAccount
     */
    select?: TrafficSourceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceAccount
     */
    omit?: TrafficSourceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceAccountInclude<ExtArgs> | null
    where?: TrafficSourceAccountWhereInput
    orderBy?: TrafficSourceAccountOrderByWithRelationInput | TrafficSourceAccountOrderByWithRelationInput[]
    cursor?: TrafficSourceAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrafficSourceAccountScalarFieldEnum | TrafficSourceAccountScalarFieldEnum[]
  }

  /**
   * TrafficSourceBm without action
   */
  export type TrafficSourceBmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBm
     */
    select?: TrafficSourceBmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBm
     */
    omit?: TrafficSourceBmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmInclude<ExtArgs> | null
  }


  /**
   * Model TrafficSourceBmToApiAccess
   */

  export type AggregateTrafficSourceBmToApiAccess = {
    _count: TrafficSourceBmToApiAccessCountAggregateOutputType | null
    _avg: TrafficSourceBmToApiAccessAvgAggregateOutputType | null
    _sum: TrafficSourceBmToApiAccessSumAggregateOutputType | null
    _min: TrafficSourceBmToApiAccessMinAggregateOutputType | null
    _max: TrafficSourceBmToApiAccessMaxAggregateOutputType | null
  }

  export type TrafficSourceBmToApiAccessAvgAggregateOutputType = {
    id: number | null
    trafficSourceBmId: number | null
    apiAccessId: number | null
  }

  export type TrafficSourceBmToApiAccessSumAggregateOutputType = {
    id: number | null
    trafficSourceBmId: number | null
    apiAccessId: number | null
  }

  export type TrafficSourceBmToApiAccessMinAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    trafficSourceBmId: number | null
    apiAccessId: number | null
  }

  export type TrafficSourceBmToApiAccessMaxAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    trafficSourceBmId: number | null
    apiAccessId: number | null
  }

  export type TrafficSourceBmToApiAccessCountAggregateOutputType = {
    id: number
    createDate: number
    updateDate: number
    trafficSourceBmId: number
    apiAccessId: number
    _all: number
  }


  export type TrafficSourceBmToApiAccessAvgAggregateInputType = {
    id?: true
    trafficSourceBmId?: true
    apiAccessId?: true
  }

  export type TrafficSourceBmToApiAccessSumAggregateInputType = {
    id?: true
    trafficSourceBmId?: true
    apiAccessId?: true
  }

  export type TrafficSourceBmToApiAccessMinAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    trafficSourceBmId?: true
    apiAccessId?: true
  }

  export type TrafficSourceBmToApiAccessMaxAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    trafficSourceBmId?: true
    apiAccessId?: true
  }

  export type TrafficSourceBmToApiAccessCountAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    trafficSourceBmId?: true
    apiAccessId?: true
    _all?: true
  }

  export type TrafficSourceBmToApiAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrafficSourceBmToApiAccess to aggregate.
     */
    where?: TrafficSourceBmToApiAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceBmToApiAccesses to fetch.
     */
    orderBy?: TrafficSourceBmToApiAccessOrderByWithRelationInput | TrafficSourceBmToApiAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrafficSourceBmToApiAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceBmToApiAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceBmToApiAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrafficSourceBmToApiAccesses
    **/
    _count?: true | TrafficSourceBmToApiAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrafficSourceBmToApiAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrafficSourceBmToApiAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrafficSourceBmToApiAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrafficSourceBmToApiAccessMaxAggregateInputType
  }

  export type GetTrafficSourceBmToApiAccessAggregateType<T extends TrafficSourceBmToApiAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateTrafficSourceBmToApiAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrafficSourceBmToApiAccess[P]>
      : GetScalarType<T[P], AggregateTrafficSourceBmToApiAccess[P]>
  }




  export type TrafficSourceBmToApiAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrafficSourceBmToApiAccessWhereInput
    orderBy?: TrafficSourceBmToApiAccessOrderByWithAggregationInput | TrafficSourceBmToApiAccessOrderByWithAggregationInput[]
    by: TrafficSourceBmToApiAccessScalarFieldEnum[] | TrafficSourceBmToApiAccessScalarFieldEnum
    having?: TrafficSourceBmToApiAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrafficSourceBmToApiAccessCountAggregateInputType | true
    _avg?: TrafficSourceBmToApiAccessAvgAggregateInputType
    _sum?: TrafficSourceBmToApiAccessSumAggregateInputType
    _min?: TrafficSourceBmToApiAccessMinAggregateInputType
    _max?: TrafficSourceBmToApiAccessMaxAggregateInputType
  }

  export type TrafficSourceBmToApiAccessGroupByOutputType = {
    id: number
    createDate: Date
    updateDate: Date
    trafficSourceBmId: number
    apiAccessId: number
    _count: TrafficSourceBmToApiAccessCountAggregateOutputType | null
    _avg: TrafficSourceBmToApiAccessAvgAggregateOutputType | null
    _sum: TrafficSourceBmToApiAccessSumAggregateOutputType | null
    _min: TrafficSourceBmToApiAccessMinAggregateOutputType | null
    _max: TrafficSourceBmToApiAccessMaxAggregateOutputType | null
  }

  type GetTrafficSourceBmToApiAccessGroupByPayload<T extends TrafficSourceBmToApiAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrafficSourceBmToApiAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrafficSourceBmToApiAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrafficSourceBmToApiAccessGroupByOutputType[P]>
            : GetScalarType<T[P], TrafficSourceBmToApiAccessGroupByOutputType[P]>
        }
      >
    >


  export type TrafficSourceBmToApiAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceBmId?: boolean
    apiAccessId?: boolean
    trafficSourceBm?: boolean | TrafficSourceBmDefaultArgs<ExtArgs>
    apiAccess?: boolean | ApiAccessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trafficSourceBmToApiAccess"]>

  export type TrafficSourceBmToApiAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceBmId?: boolean
    apiAccessId?: boolean
    trafficSourceBm?: boolean | TrafficSourceBmDefaultArgs<ExtArgs>
    apiAccess?: boolean | ApiAccessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trafficSourceBmToApiAccess"]>

  export type TrafficSourceBmToApiAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceBmId?: boolean
    apiAccessId?: boolean
    trafficSourceBm?: boolean | TrafficSourceBmDefaultArgs<ExtArgs>
    apiAccess?: boolean | ApiAccessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trafficSourceBmToApiAccess"]>

  export type TrafficSourceBmToApiAccessSelectScalar = {
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    trafficSourceBmId?: boolean
    apiAccessId?: boolean
  }

  export type TrafficSourceBmToApiAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createDate" | "updateDate" | "trafficSourceBmId" | "apiAccessId", ExtArgs["result"]["trafficSourceBmToApiAccess"]>
  export type TrafficSourceBmToApiAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceBm?: boolean | TrafficSourceBmDefaultArgs<ExtArgs>
    apiAccess?: boolean | ApiAccessDefaultArgs<ExtArgs>
  }
  export type TrafficSourceBmToApiAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceBm?: boolean | TrafficSourceBmDefaultArgs<ExtArgs>
    apiAccess?: boolean | ApiAccessDefaultArgs<ExtArgs>
  }
  export type TrafficSourceBmToApiAccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceBm?: boolean | TrafficSourceBmDefaultArgs<ExtArgs>
    apiAccess?: boolean | ApiAccessDefaultArgs<ExtArgs>
  }

  export type $TrafficSourceBmToApiAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrafficSourceBmToApiAccess"
    objects: {
      trafficSourceBm: Prisma.$TrafficSourceBmPayload<ExtArgs>
      apiAccess: Prisma.$ApiAccessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createDate: Date
      updateDate: Date
      trafficSourceBmId: number
      apiAccessId: number
    }, ExtArgs["result"]["trafficSourceBmToApiAccess"]>
    composites: {}
  }

  type TrafficSourceBmToApiAccessGetPayload<S extends boolean | null | undefined | TrafficSourceBmToApiAccessDefaultArgs> = $Result.GetResult<Prisma.$TrafficSourceBmToApiAccessPayload, S>

  type TrafficSourceBmToApiAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrafficSourceBmToApiAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrafficSourceBmToApiAccessCountAggregateInputType | true
    }

  export interface TrafficSourceBmToApiAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrafficSourceBmToApiAccess'], meta: { name: 'TrafficSourceBmToApiAccess' } }
    /**
     * Find zero or one TrafficSourceBmToApiAccess that matches the filter.
     * @param {TrafficSourceBmToApiAccessFindUniqueArgs} args - Arguments to find a TrafficSourceBmToApiAccess
     * @example
     * // Get one TrafficSourceBmToApiAccess
     * const trafficSourceBmToApiAccess = await prisma.trafficSourceBmToApiAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrafficSourceBmToApiAccessFindUniqueArgs>(args: SelectSubset<T, TrafficSourceBmToApiAccessFindUniqueArgs<ExtArgs>>): Prisma__TrafficSourceBmToApiAccessClient<$Result.GetResult<Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrafficSourceBmToApiAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrafficSourceBmToApiAccessFindUniqueOrThrowArgs} args - Arguments to find a TrafficSourceBmToApiAccess
     * @example
     * // Get one TrafficSourceBmToApiAccess
     * const trafficSourceBmToApiAccess = await prisma.trafficSourceBmToApiAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrafficSourceBmToApiAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, TrafficSourceBmToApiAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrafficSourceBmToApiAccessClient<$Result.GetResult<Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrafficSourceBmToApiAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceBmToApiAccessFindFirstArgs} args - Arguments to find a TrafficSourceBmToApiAccess
     * @example
     * // Get one TrafficSourceBmToApiAccess
     * const trafficSourceBmToApiAccess = await prisma.trafficSourceBmToApiAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrafficSourceBmToApiAccessFindFirstArgs>(args?: SelectSubset<T, TrafficSourceBmToApiAccessFindFirstArgs<ExtArgs>>): Prisma__TrafficSourceBmToApiAccessClient<$Result.GetResult<Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrafficSourceBmToApiAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceBmToApiAccessFindFirstOrThrowArgs} args - Arguments to find a TrafficSourceBmToApiAccess
     * @example
     * // Get one TrafficSourceBmToApiAccess
     * const trafficSourceBmToApiAccess = await prisma.trafficSourceBmToApiAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrafficSourceBmToApiAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, TrafficSourceBmToApiAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrafficSourceBmToApiAccessClient<$Result.GetResult<Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrafficSourceBmToApiAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceBmToApiAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrafficSourceBmToApiAccesses
     * const trafficSourceBmToApiAccesses = await prisma.trafficSourceBmToApiAccess.findMany()
     * 
     * // Get first 10 TrafficSourceBmToApiAccesses
     * const trafficSourceBmToApiAccesses = await prisma.trafficSourceBmToApiAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trafficSourceBmToApiAccessWithIdOnly = await prisma.trafficSourceBmToApiAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrafficSourceBmToApiAccessFindManyArgs>(args?: SelectSubset<T, TrafficSourceBmToApiAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrafficSourceBmToApiAccess.
     * @param {TrafficSourceBmToApiAccessCreateArgs} args - Arguments to create a TrafficSourceBmToApiAccess.
     * @example
     * // Create one TrafficSourceBmToApiAccess
     * const TrafficSourceBmToApiAccess = await prisma.trafficSourceBmToApiAccess.create({
     *   data: {
     *     // ... data to create a TrafficSourceBmToApiAccess
     *   }
     * })
     * 
     */
    create<T extends TrafficSourceBmToApiAccessCreateArgs>(args: SelectSubset<T, TrafficSourceBmToApiAccessCreateArgs<ExtArgs>>): Prisma__TrafficSourceBmToApiAccessClient<$Result.GetResult<Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrafficSourceBmToApiAccesses.
     * @param {TrafficSourceBmToApiAccessCreateManyArgs} args - Arguments to create many TrafficSourceBmToApiAccesses.
     * @example
     * // Create many TrafficSourceBmToApiAccesses
     * const trafficSourceBmToApiAccess = await prisma.trafficSourceBmToApiAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrafficSourceBmToApiAccessCreateManyArgs>(args?: SelectSubset<T, TrafficSourceBmToApiAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrafficSourceBmToApiAccesses and returns the data saved in the database.
     * @param {TrafficSourceBmToApiAccessCreateManyAndReturnArgs} args - Arguments to create many TrafficSourceBmToApiAccesses.
     * @example
     * // Create many TrafficSourceBmToApiAccesses
     * const trafficSourceBmToApiAccess = await prisma.trafficSourceBmToApiAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrafficSourceBmToApiAccesses and only return the `id`
     * const trafficSourceBmToApiAccessWithIdOnly = await prisma.trafficSourceBmToApiAccess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrafficSourceBmToApiAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, TrafficSourceBmToApiAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrafficSourceBmToApiAccess.
     * @param {TrafficSourceBmToApiAccessDeleteArgs} args - Arguments to delete one TrafficSourceBmToApiAccess.
     * @example
     * // Delete one TrafficSourceBmToApiAccess
     * const TrafficSourceBmToApiAccess = await prisma.trafficSourceBmToApiAccess.delete({
     *   where: {
     *     // ... filter to delete one TrafficSourceBmToApiAccess
     *   }
     * })
     * 
     */
    delete<T extends TrafficSourceBmToApiAccessDeleteArgs>(args: SelectSubset<T, TrafficSourceBmToApiAccessDeleteArgs<ExtArgs>>): Prisma__TrafficSourceBmToApiAccessClient<$Result.GetResult<Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrafficSourceBmToApiAccess.
     * @param {TrafficSourceBmToApiAccessUpdateArgs} args - Arguments to update one TrafficSourceBmToApiAccess.
     * @example
     * // Update one TrafficSourceBmToApiAccess
     * const trafficSourceBmToApiAccess = await prisma.trafficSourceBmToApiAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrafficSourceBmToApiAccessUpdateArgs>(args: SelectSubset<T, TrafficSourceBmToApiAccessUpdateArgs<ExtArgs>>): Prisma__TrafficSourceBmToApiAccessClient<$Result.GetResult<Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrafficSourceBmToApiAccesses.
     * @param {TrafficSourceBmToApiAccessDeleteManyArgs} args - Arguments to filter TrafficSourceBmToApiAccesses to delete.
     * @example
     * // Delete a few TrafficSourceBmToApiAccesses
     * const { count } = await prisma.trafficSourceBmToApiAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrafficSourceBmToApiAccessDeleteManyArgs>(args?: SelectSubset<T, TrafficSourceBmToApiAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrafficSourceBmToApiAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceBmToApiAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrafficSourceBmToApiAccesses
     * const trafficSourceBmToApiAccess = await prisma.trafficSourceBmToApiAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrafficSourceBmToApiAccessUpdateManyArgs>(args: SelectSubset<T, TrafficSourceBmToApiAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrafficSourceBmToApiAccesses and returns the data updated in the database.
     * @param {TrafficSourceBmToApiAccessUpdateManyAndReturnArgs} args - Arguments to update many TrafficSourceBmToApiAccesses.
     * @example
     * // Update many TrafficSourceBmToApiAccesses
     * const trafficSourceBmToApiAccess = await prisma.trafficSourceBmToApiAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrafficSourceBmToApiAccesses and only return the `id`
     * const trafficSourceBmToApiAccessWithIdOnly = await prisma.trafficSourceBmToApiAccess.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrafficSourceBmToApiAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, TrafficSourceBmToApiAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrafficSourceBmToApiAccess.
     * @param {TrafficSourceBmToApiAccessUpsertArgs} args - Arguments to update or create a TrafficSourceBmToApiAccess.
     * @example
     * // Update or create a TrafficSourceBmToApiAccess
     * const trafficSourceBmToApiAccess = await prisma.trafficSourceBmToApiAccess.upsert({
     *   create: {
     *     // ... data to create a TrafficSourceBmToApiAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrafficSourceBmToApiAccess we want to update
     *   }
     * })
     */
    upsert<T extends TrafficSourceBmToApiAccessUpsertArgs>(args: SelectSubset<T, TrafficSourceBmToApiAccessUpsertArgs<ExtArgs>>): Prisma__TrafficSourceBmToApiAccessClient<$Result.GetResult<Prisma.$TrafficSourceBmToApiAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrafficSourceBmToApiAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceBmToApiAccessCountArgs} args - Arguments to filter TrafficSourceBmToApiAccesses to count.
     * @example
     * // Count the number of TrafficSourceBmToApiAccesses
     * const count = await prisma.trafficSourceBmToApiAccess.count({
     *   where: {
     *     // ... the filter for the TrafficSourceBmToApiAccesses we want to count
     *   }
     * })
    **/
    count<T extends TrafficSourceBmToApiAccessCountArgs>(
      args?: Subset<T, TrafficSourceBmToApiAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrafficSourceBmToApiAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrafficSourceBmToApiAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceBmToApiAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrafficSourceBmToApiAccessAggregateArgs>(args: Subset<T, TrafficSourceBmToApiAccessAggregateArgs>): Prisma.PrismaPromise<GetTrafficSourceBmToApiAccessAggregateType<T>>

    /**
     * Group by TrafficSourceBmToApiAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceBmToApiAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrafficSourceBmToApiAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrafficSourceBmToApiAccessGroupByArgs['orderBy'] }
        : { orderBy?: TrafficSourceBmToApiAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrafficSourceBmToApiAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrafficSourceBmToApiAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrafficSourceBmToApiAccess model
   */
  readonly fields: TrafficSourceBmToApiAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrafficSourceBmToApiAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrafficSourceBmToApiAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trafficSourceBm<T extends TrafficSourceBmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrafficSourceBmDefaultArgs<ExtArgs>>): Prisma__TrafficSourceBmClient<$Result.GetResult<Prisma.$TrafficSourceBmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apiAccess<T extends ApiAccessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiAccessDefaultArgs<ExtArgs>>): Prisma__ApiAccessClient<$Result.GetResult<Prisma.$ApiAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrafficSourceBmToApiAccess model
   */
  interface TrafficSourceBmToApiAccessFieldRefs {
    readonly id: FieldRef<"TrafficSourceBmToApiAccess", 'Int'>
    readonly createDate: FieldRef<"TrafficSourceBmToApiAccess", 'DateTime'>
    readonly updateDate: FieldRef<"TrafficSourceBmToApiAccess", 'DateTime'>
    readonly trafficSourceBmId: FieldRef<"TrafficSourceBmToApiAccess", 'Int'>
    readonly apiAccessId: FieldRef<"TrafficSourceBmToApiAccess", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TrafficSourceBmToApiAccess findUnique
   */
  export type TrafficSourceBmToApiAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBmToApiAccess
     */
    select?: TrafficSourceBmToApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBmToApiAccess
     */
    omit?: TrafficSourceBmToApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmToApiAccessInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceBmToApiAccess to fetch.
     */
    where: TrafficSourceBmToApiAccessWhereUniqueInput
  }

  /**
   * TrafficSourceBmToApiAccess findUniqueOrThrow
   */
  export type TrafficSourceBmToApiAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBmToApiAccess
     */
    select?: TrafficSourceBmToApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBmToApiAccess
     */
    omit?: TrafficSourceBmToApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmToApiAccessInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceBmToApiAccess to fetch.
     */
    where: TrafficSourceBmToApiAccessWhereUniqueInput
  }

  /**
   * TrafficSourceBmToApiAccess findFirst
   */
  export type TrafficSourceBmToApiAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBmToApiAccess
     */
    select?: TrafficSourceBmToApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBmToApiAccess
     */
    omit?: TrafficSourceBmToApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmToApiAccessInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceBmToApiAccess to fetch.
     */
    where?: TrafficSourceBmToApiAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceBmToApiAccesses to fetch.
     */
    orderBy?: TrafficSourceBmToApiAccessOrderByWithRelationInput | TrafficSourceBmToApiAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrafficSourceBmToApiAccesses.
     */
    cursor?: TrafficSourceBmToApiAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceBmToApiAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceBmToApiAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrafficSourceBmToApiAccesses.
     */
    distinct?: TrafficSourceBmToApiAccessScalarFieldEnum | TrafficSourceBmToApiAccessScalarFieldEnum[]
  }

  /**
   * TrafficSourceBmToApiAccess findFirstOrThrow
   */
  export type TrafficSourceBmToApiAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBmToApiAccess
     */
    select?: TrafficSourceBmToApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBmToApiAccess
     */
    omit?: TrafficSourceBmToApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmToApiAccessInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceBmToApiAccess to fetch.
     */
    where?: TrafficSourceBmToApiAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceBmToApiAccesses to fetch.
     */
    orderBy?: TrafficSourceBmToApiAccessOrderByWithRelationInput | TrafficSourceBmToApiAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrafficSourceBmToApiAccesses.
     */
    cursor?: TrafficSourceBmToApiAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceBmToApiAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceBmToApiAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrafficSourceBmToApiAccesses.
     */
    distinct?: TrafficSourceBmToApiAccessScalarFieldEnum | TrafficSourceBmToApiAccessScalarFieldEnum[]
  }

  /**
   * TrafficSourceBmToApiAccess findMany
   */
  export type TrafficSourceBmToApiAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBmToApiAccess
     */
    select?: TrafficSourceBmToApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBmToApiAccess
     */
    omit?: TrafficSourceBmToApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmToApiAccessInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceBmToApiAccesses to fetch.
     */
    where?: TrafficSourceBmToApiAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceBmToApiAccesses to fetch.
     */
    orderBy?: TrafficSourceBmToApiAccessOrderByWithRelationInput | TrafficSourceBmToApiAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrafficSourceBmToApiAccesses.
     */
    cursor?: TrafficSourceBmToApiAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceBmToApiAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceBmToApiAccesses.
     */
    skip?: number
    distinct?: TrafficSourceBmToApiAccessScalarFieldEnum | TrafficSourceBmToApiAccessScalarFieldEnum[]
  }

  /**
   * TrafficSourceBmToApiAccess create
   */
  export type TrafficSourceBmToApiAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBmToApiAccess
     */
    select?: TrafficSourceBmToApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBmToApiAccess
     */
    omit?: TrafficSourceBmToApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmToApiAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a TrafficSourceBmToApiAccess.
     */
    data: XOR<TrafficSourceBmToApiAccessCreateInput, TrafficSourceBmToApiAccessUncheckedCreateInput>
  }

  /**
   * TrafficSourceBmToApiAccess createMany
   */
  export type TrafficSourceBmToApiAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrafficSourceBmToApiAccesses.
     */
    data: TrafficSourceBmToApiAccessCreateManyInput | TrafficSourceBmToApiAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrafficSourceBmToApiAccess createManyAndReturn
   */
  export type TrafficSourceBmToApiAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBmToApiAccess
     */
    select?: TrafficSourceBmToApiAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBmToApiAccess
     */
    omit?: TrafficSourceBmToApiAccessOmit<ExtArgs> | null
    /**
     * The data used to create many TrafficSourceBmToApiAccesses.
     */
    data: TrafficSourceBmToApiAccessCreateManyInput | TrafficSourceBmToApiAccessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmToApiAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrafficSourceBmToApiAccess update
   */
  export type TrafficSourceBmToApiAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBmToApiAccess
     */
    select?: TrafficSourceBmToApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBmToApiAccess
     */
    omit?: TrafficSourceBmToApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmToApiAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a TrafficSourceBmToApiAccess.
     */
    data: XOR<TrafficSourceBmToApiAccessUpdateInput, TrafficSourceBmToApiAccessUncheckedUpdateInput>
    /**
     * Choose, which TrafficSourceBmToApiAccess to update.
     */
    where: TrafficSourceBmToApiAccessWhereUniqueInput
  }

  /**
   * TrafficSourceBmToApiAccess updateMany
   */
  export type TrafficSourceBmToApiAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrafficSourceBmToApiAccesses.
     */
    data: XOR<TrafficSourceBmToApiAccessUpdateManyMutationInput, TrafficSourceBmToApiAccessUncheckedUpdateManyInput>
    /**
     * Filter which TrafficSourceBmToApiAccesses to update
     */
    where?: TrafficSourceBmToApiAccessWhereInput
    /**
     * Limit how many TrafficSourceBmToApiAccesses to update.
     */
    limit?: number
  }

  /**
   * TrafficSourceBmToApiAccess updateManyAndReturn
   */
  export type TrafficSourceBmToApiAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBmToApiAccess
     */
    select?: TrafficSourceBmToApiAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBmToApiAccess
     */
    omit?: TrafficSourceBmToApiAccessOmit<ExtArgs> | null
    /**
     * The data used to update TrafficSourceBmToApiAccesses.
     */
    data: XOR<TrafficSourceBmToApiAccessUpdateManyMutationInput, TrafficSourceBmToApiAccessUncheckedUpdateManyInput>
    /**
     * Filter which TrafficSourceBmToApiAccesses to update
     */
    where?: TrafficSourceBmToApiAccessWhereInput
    /**
     * Limit how many TrafficSourceBmToApiAccesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmToApiAccessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrafficSourceBmToApiAccess upsert
   */
  export type TrafficSourceBmToApiAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBmToApiAccess
     */
    select?: TrafficSourceBmToApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBmToApiAccess
     */
    omit?: TrafficSourceBmToApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmToApiAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the TrafficSourceBmToApiAccess to update in case it exists.
     */
    where: TrafficSourceBmToApiAccessWhereUniqueInput
    /**
     * In case the TrafficSourceBmToApiAccess found by the `where` argument doesn't exist, create a new TrafficSourceBmToApiAccess with this data.
     */
    create: XOR<TrafficSourceBmToApiAccessCreateInput, TrafficSourceBmToApiAccessUncheckedCreateInput>
    /**
     * In case the TrafficSourceBmToApiAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrafficSourceBmToApiAccessUpdateInput, TrafficSourceBmToApiAccessUncheckedUpdateInput>
  }

  /**
   * TrafficSourceBmToApiAccess delete
   */
  export type TrafficSourceBmToApiAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBmToApiAccess
     */
    select?: TrafficSourceBmToApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBmToApiAccess
     */
    omit?: TrafficSourceBmToApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmToApiAccessInclude<ExtArgs> | null
    /**
     * Filter which TrafficSourceBmToApiAccess to delete.
     */
    where: TrafficSourceBmToApiAccessWhereUniqueInput
  }

  /**
   * TrafficSourceBmToApiAccess deleteMany
   */
  export type TrafficSourceBmToApiAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrafficSourceBmToApiAccesses to delete
     */
    where?: TrafficSourceBmToApiAccessWhereInput
    /**
     * Limit how many TrafficSourceBmToApiAccesses to delete.
     */
    limit?: number
  }

  /**
   * TrafficSourceBmToApiAccess without action
   */
  export type TrafficSourceBmToApiAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceBmToApiAccess
     */
    select?: TrafficSourceBmToApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceBmToApiAccess
     */
    omit?: TrafficSourceBmToApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceBmToApiAccessInclude<ExtArgs> | null
  }


  /**
   * Model TrafficSourceDailyAdStat
   */

  export type AggregateTrafficSourceDailyAdStat = {
    _count: TrafficSourceDailyAdStatCountAggregateOutputType | null
    _avg: TrafficSourceDailyAdStatAvgAggregateOutputType | null
    _sum: TrafficSourceDailyAdStatSumAggregateOutputType | null
    _min: TrafficSourceDailyAdStatMinAggregateOutputType | null
    _max: TrafficSourceDailyAdStatMaxAggregateOutputType | null
  }

  export type TrafficSourceDailyAdStatAvgAggregateOutputType = {
    id: number | null
    spend: Decimal | null
    clicks: number | null
    impressions: number | null
    trafficSourceAccountId: number | null
  }

  export type TrafficSourceDailyAdStatSumAggregateOutputType = {
    id: number | null
    spend: Decimal | null
    clicks: number | null
    impressions: number | null
    trafficSourceAccountId: number | null
  }

  export type TrafficSourceDailyAdStatMinAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    spend: Decimal | null
    clicks: number | null
    externalAdId: string | null
    externalAdSetId: string | null
    externalCampaignId: string | null
    impressions: number | null
    externalDateStart: Date | null
    externalDateStop: Date | null
    trafficSourceType: $Enums.TrafficSourceType | null
    trafficSourceAccountId: number | null
  }

  export type TrafficSourceDailyAdStatMaxAggregateOutputType = {
    id: number | null
    createDate: Date | null
    updateDate: Date | null
    spend: Decimal | null
    clicks: number | null
    externalAdId: string | null
    externalAdSetId: string | null
    externalCampaignId: string | null
    impressions: number | null
    externalDateStart: Date | null
    externalDateStop: Date | null
    trafficSourceType: $Enums.TrafficSourceType | null
    trafficSourceAccountId: number | null
  }

  export type TrafficSourceDailyAdStatCountAggregateOutputType = {
    id: number
    createDate: number
    updateDate: number
    spend: number
    clicks: number
    externalAdId: number
    externalAdSetId: number
    externalCampaignId: number
    impressions: number
    externalDateStart: number
    externalDateStop: number
    trafficSourceType: number
    trafficSourceAccountId: number
    _all: number
  }


  export type TrafficSourceDailyAdStatAvgAggregateInputType = {
    id?: true
    spend?: true
    clicks?: true
    impressions?: true
    trafficSourceAccountId?: true
  }

  export type TrafficSourceDailyAdStatSumAggregateInputType = {
    id?: true
    spend?: true
    clicks?: true
    impressions?: true
    trafficSourceAccountId?: true
  }

  export type TrafficSourceDailyAdStatMinAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    spend?: true
    clicks?: true
    externalAdId?: true
    externalAdSetId?: true
    externalCampaignId?: true
    impressions?: true
    externalDateStart?: true
    externalDateStop?: true
    trafficSourceType?: true
    trafficSourceAccountId?: true
  }

  export type TrafficSourceDailyAdStatMaxAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    spend?: true
    clicks?: true
    externalAdId?: true
    externalAdSetId?: true
    externalCampaignId?: true
    impressions?: true
    externalDateStart?: true
    externalDateStop?: true
    trafficSourceType?: true
    trafficSourceAccountId?: true
  }

  export type TrafficSourceDailyAdStatCountAggregateInputType = {
    id?: true
    createDate?: true
    updateDate?: true
    spend?: true
    clicks?: true
    externalAdId?: true
    externalAdSetId?: true
    externalCampaignId?: true
    impressions?: true
    externalDateStart?: true
    externalDateStop?: true
    trafficSourceType?: true
    trafficSourceAccountId?: true
    _all?: true
  }

  export type TrafficSourceDailyAdStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrafficSourceDailyAdStat to aggregate.
     */
    where?: TrafficSourceDailyAdStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceDailyAdStats to fetch.
     */
    orderBy?: TrafficSourceDailyAdStatOrderByWithRelationInput | TrafficSourceDailyAdStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrafficSourceDailyAdStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceDailyAdStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceDailyAdStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrafficSourceDailyAdStats
    **/
    _count?: true | TrafficSourceDailyAdStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrafficSourceDailyAdStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrafficSourceDailyAdStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrafficSourceDailyAdStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrafficSourceDailyAdStatMaxAggregateInputType
  }

  export type GetTrafficSourceDailyAdStatAggregateType<T extends TrafficSourceDailyAdStatAggregateArgs> = {
        [P in keyof T & keyof AggregateTrafficSourceDailyAdStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrafficSourceDailyAdStat[P]>
      : GetScalarType<T[P], AggregateTrafficSourceDailyAdStat[P]>
  }




  export type TrafficSourceDailyAdStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrafficSourceDailyAdStatWhereInput
    orderBy?: TrafficSourceDailyAdStatOrderByWithAggregationInput | TrafficSourceDailyAdStatOrderByWithAggregationInput[]
    by: TrafficSourceDailyAdStatScalarFieldEnum[] | TrafficSourceDailyAdStatScalarFieldEnum
    having?: TrafficSourceDailyAdStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrafficSourceDailyAdStatCountAggregateInputType | true
    _avg?: TrafficSourceDailyAdStatAvgAggregateInputType
    _sum?: TrafficSourceDailyAdStatSumAggregateInputType
    _min?: TrafficSourceDailyAdStatMinAggregateInputType
    _max?: TrafficSourceDailyAdStatMaxAggregateInputType
  }

  export type TrafficSourceDailyAdStatGroupByOutputType = {
    id: number
    createDate: Date
    updateDate: Date
    spend: Decimal
    clicks: number
    externalAdId: string
    externalAdSetId: string
    externalCampaignId: string
    impressions: number
    externalDateStart: Date
    externalDateStop: Date
    trafficSourceType: $Enums.TrafficSourceType
    trafficSourceAccountId: number
    _count: TrafficSourceDailyAdStatCountAggregateOutputType | null
    _avg: TrafficSourceDailyAdStatAvgAggregateOutputType | null
    _sum: TrafficSourceDailyAdStatSumAggregateOutputType | null
    _min: TrafficSourceDailyAdStatMinAggregateOutputType | null
    _max: TrafficSourceDailyAdStatMaxAggregateOutputType | null
  }

  type GetTrafficSourceDailyAdStatGroupByPayload<T extends TrafficSourceDailyAdStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrafficSourceDailyAdStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrafficSourceDailyAdStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrafficSourceDailyAdStatGroupByOutputType[P]>
            : GetScalarType<T[P], TrafficSourceDailyAdStatGroupByOutputType[P]>
        }
      >
    >


  export type TrafficSourceDailyAdStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    spend?: boolean
    clicks?: boolean
    externalAdId?: boolean
    externalAdSetId?: boolean
    externalCampaignId?: boolean
    impressions?: boolean
    externalDateStart?: boolean
    externalDateStop?: boolean
    trafficSourceType?: boolean
    trafficSourceAccountId?: boolean
    trafficSourceAccount?: boolean | TrafficSourceAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trafficSourceDailyAdStat"]>

  export type TrafficSourceDailyAdStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    spend?: boolean
    clicks?: boolean
    externalAdId?: boolean
    externalAdSetId?: boolean
    externalCampaignId?: boolean
    impressions?: boolean
    externalDateStart?: boolean
    externalDateStop?: boolean
    trafficSourceType?: boolean
    trafficSourceAccountId?: boolean
    trafficSourceAccount?: boolean | TrafficSourceAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trafficSourceDailyAdStat"]>

  export type TrafficSourceDailyAdStatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    spend?: boolean
    clicks?: boolean
    externalAdId?: boolean
    externalAdSetId?: boolean
    externalCampaignId?: boolean
    impressions?: boolean
    externalDateStart?: boolean
    externalDateStop?: boolean
    trafficSourceType?: boolean
    trafficSourceAccountId?: boolean
    trafficSourceAccount?: boolean | TrafficSourceAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trafficSourceDailyAdStat"]>

  export type TrafficSourceDailyAdStatSelectScalar = {
    id?: boolean
    createDate?: boolean
    updateDate?: boolean
    spend?: boolean
    clicks?: boolean
    externalAdId?: boolean
    externalAdSetId?: boolean
    externalCampaignId?: boolean
    impressions?: boolean
    externalDateStart?: boolean
    externalDateStop?: boolean
    trafficSourceType?: boolean
    trafficSourceAccountId?: boolean
  }

  export type TrafficSourceDailyAdStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createDate" | "updateDate" | "spend" | "clicks" | "externalAdId" | "externalAdSetId" | "externalCampaignId" | "impressions" | "externalDateStart" | "externalDateStop" | "trafficSourceType" | "trafficSourceAccountId", ExtArgs["result"]["trafficSourceDailyAdStat"]>
  export type TrafficSourceDailyAdStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceAccount?: boolean | TrafficSourceAccountDefaultArgs<ExtArgs>
  }
  export type TrafficSourceDailyAdStatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceAccount?: boolean | TrafficSourceAccountDefaultArgs<ExtArgs>
  }
  export type TrafficSourceDailyAdStatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trafficSourceAccount?: boolean | TrafficSourceAccountDefaultArgs<ExtArgs>
  }

  export type $TrafficSourceDailyAdStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrafficSourceDailyAdStat"
    objects: {
      trafficSourceAccount: Prisma.$TrafficSourceAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createDate: Date
      updateDate: Date
      spend: Prisma.Decimal
      clicks: number
      externalAdId: string
      externalAdSetId: string
      externalCampaignId: string
      impressions: number
      externalDateStart: Date
      externalDateStop: Date
      trafficSourceType: $Enums.TrafficSourceType
      trafficSourceAccountId: number
    }, ExtArgs["result"]["trafficSourceDailyAdStat"]>
    composites: {}
  }

  type TrafficSourceDailyAdStatGetPayload<S extends boolean | null | undefined | TrafficSourceDailyAdStatDefaultArgs> = $Result.GetResult<Prisma.$TrafficSourceDailyAdStatPayload, S>

  type TrafficSourceDailyAdStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrafficSourceDailyAdStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrafficSourceDailyAdStatCountAggregateInputType | true
    }

  export interface TrafficSourceDailyAdStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrafficSourceDailyAdStat'], meta: { name: 'TrafficSourceDailyAdStat' } }
    /**
     * Find zero or one TrafficSourceDailyAdStat that matches the filter.
     * @param {TrafficSourceDailyAdStatFindUniqueArgs} args - Arguments to find a TrafficSourceDailyAdStat
     * @example
     * // Get one TrafficSourceDailyAdStat
     * const trafficSourceDailyAdStat = await prisma.trafficSourceDailyAdStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrafficSourceDailyAdStatFindUniqueArgs>(args: SelectSubset<T, TrafficSourceDailyAdStatFindUniqueArgs<ExtArgs>>): Prisma__TrafficSourceDailyAdStatClient<$Result.GetResult<Prisma.$TrafficSourceDailyAdStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrafficSourceDailyAdStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrafficSourceDailyAdStatFindUniqueOrThrowArgs} args - Arguments to find a TrafficSourceDailyAdStat
     * @example
     * // Get one TrafficSourceDailyAdStat
     * const trafficSourceDailyAdStat = await prisma.trafficSourceDailyAdStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrafficSourceDailyAdStatFindUniqueOrThrowArgs>(args: SelectSubset<T, TrafficSourceDailyAdStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrafficSourceDailyAdStatClient<$Result.GetResult<Prisma.$TrafficSourceDailyAdStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrafficSourceDailyAdStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceDailyAdStatFindFirstArgs} args - Arguments to find a TrafficSourceDailyAdStat
     * @example
     * // Get one TrafficSourceDailyAdStat
     * const trafficSourceDailyAdStat = await prisma.trafficSourceDailyAdStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrafficSourceDailyAdStatFindFirstArgs>(args?: SelectSubset<T, TrafficSourceDailyAdStatFindFirstArgs<ExtArgs>>): Prisma__TrafficSourceDailyAdStatClient<$Result.GetResult<Prisma.$TrafficSourceDailyAdStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrafficSourceDailyAdStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceDailyAdStatFindFirstOrThrowArgs} args - Arguments to find a TrafficSourceDailyAdStat
     * @example
     * // Get one TrafficSourceDailyAdStat
     * const trafficSourceDailyAdStat = await prisma.trafficSourceDailyAdStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrafficSourceDailyAdStatFindFirstOrThrowArgs>(args?: SelectSubset<T, TrafficSourceDailyAdStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrafficSourceDailyAdStatClient<$Result.GetResult<Prisma.$TrafficSourceDailyAdStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrafficSourceDailyAdStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceDailyAdStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrafficSourceDailyAdStats
     * const trafficSourceDailyAdStats = await prisma.trafficSourceDailyAdStat.findMany()
     * 
     * // Get first 10 TrafficSourceDailyAdStats
     * const trafficSourceDailyAdStats = await prisma.trafficSourceDailyAdStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trafficSourceDailyAdStatWithIdOnly = await prisma.trafficSourceDailyAdStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrafficSourceDailyAdStatFindManyArgs>(args?: SelectSubset<T, TrafficSourceDailyAdStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceDailyAdStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrafficSourceDailyAdStat.
     * @param {TrafficSourceDailyAdStatCreateArgs} args - Arguments to create a TrafficSourceDailyAdStat.
     * @example
     * // Create one TrafficSourceDailyAdStat
     * const TrafficSourceDailyAdStat = await prisma.trafficSourceDailyAdStat.create({
     *   data: {
     *     // ... data to create a TrafficSourceDailyAdStat
     *   }
     * })
     * 
     */
    create<T extends TrafficSourceDailyAdStatCreateArgs>(args: SelectSubset<T, TrafficSourceDailyAdStatCreateArgs<ExtArgs>>): Prisma__TrafficSourceDailyAdStatClient<$Result.GetResult<Prisma.$TrafficSourceDailyAdStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrafficSourceDailyAdStats.
     * @param {TrafficSourceDailyAdStatCreateManyArgs} args - Arguments to create many TrafficSourceDailyAdStats.
     * @example
     * // Create many TrafficSourceDailyAdStats
     * const trafficSourceDailyAdStat = await prisma.trafficSourceDailyAdStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrafficSourceDailyAdStatCreateManyArgs>(args?: SelectSubset<T, TrafficSourceDailyAdStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrafficSourceDailyAdStats and returns the data saved in the database.
     * @param {TrafficSourceDailyAdStatCreateManyAndReturnArgs} args - Arguments to create many TrafficSourceDailyAdStats.
     * @example
     * // Create many TrafficSourceDailyAdStats
     * const trafficSourceDailyAdStat = await prisma.trafficSourceDailyAdStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrafficSourceDailyAdStats and only return the `id`
     * const trafficSourceDailyAdStatWithIdOnly = await prisma.trafficSourceDailyAdStat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrafficSourceDailyAdStatCreateManyAndReturnArgs>(args?: SelectSubset<T, TrafficSourceDailyAdStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceDailyAdStatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrafficSourceDailyAdStat.
     * @param {TrafficSourceDailyAdStatDeleteArgs} args - Arguments to delete one TrafficSourceDailyAdStat.
     * @example
     * // Delete one TrafficSourceDailyAdStat
     * const TrafficSourceDailyAdStat = await prisma.trafficSourceDailyAdStat.delete({
     *   where: {
     *     // ... filter to delete one TrafficSourceDailyAdStat
     *   }
     * })
     * 
     */
    delete<T extends TrafficSourceDailyAdStatDeleteArgs>(args: SelectSubset<T, TrafficSourceDailyAdStatDeleteArgs<ExtArgs>>): Prisma__TrafficSourceDailyAdStatClient<$Result.GetResult<Prisma.$TrafficSourceDailyAdStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrafficSourceDailyAdStat.
     * @param {TrafficSourceDailyAdStatUpdateArgs} args - Arguments to update one TrafficSourceDailyAdStat.
     * @example
     * // Update one TrafficSourceDailyAdStat
     * const trafficSourceDailyAdStat = await prisma.trafficSourceDailyAdStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrafficSourceDailyAdStatUpdateArgs>(args: SelectSubset<T, TrafficSourceDailyAdStatUpdateArgs<ExtArgs>>): Prisma__TrafficSourceDailyAdStatClient<$Result.GetResult<Prisma.$TrafficSourceDailyAdStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrafficSourceDailyAdStats.
     * @param {TrafficSourceDailyAdStatDeleteManyArgs} args - Arguments to filter TrafficSourceDailyAdStats to delete.
     * @example
     * // Delete a few TrafficSourceDailyAdStats
     * const { count } = await prisma.trafficSourceDailyAdStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrafficSourceDailyAdStatDeleteManyArgs>(args?: SelectSubset<T, TrafficSourceDailyAdStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrafficSourceDailyAdStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceDailyAdStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrafficSourceDailyAdStats
     * const trafficSourceDailyAdStat = await prisma.trafficSourceDailyAdStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrafficSourceDailyAdStatUpdateManyArgs>(args: SelectSubset<T, TrafficSourceDailyAdStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrafficSourceDailyAdStats and returns the data updated in the database.
     * @param {TrafficSourceDailyAdStatUpdateManyAndReturnArgs} args - Arguments to update many TrafficSourceDailyAdStats.
     * @example
     * // Update many TrafficSourceDailyAdStats
     * const trafficSourceDailyAdStat = await prisma.trafficSourceDailyAdStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrafficSourceDailyAdStats and only return the `id`
     * const trafficSourceDailyAdStatWithIdOnly = await prisma.trafficSourceDailyAdStat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrafficSourceDailyAdStatUpdateManyAndReturnArgs>(args: SelectSubset<T, TrafficSourceDailyAdStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafficSourceDailyAdStatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrafficSourceDailyAdStat.
     * @param {TrafficSourceDailyAdStatUpsertArgs} args - Arguments to update or create a TrafficSourceDailyAdStat.
     * @example
     * // Update or create a TrafficSourceDailyAdStat
     * const trafficSourceDailyAdStat = await prisma.trafficSourceDailyAdStat.upsert({
     *   create: {
     *     // ... data to create a TrafficSourceDailyAdStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrafficSourceDailyAdStat we want to update
     *   }
     * })
     */
    upsert<T extends TrafficSourceDailyAdStatUpsertArgs>(args: SelectSubset<T, TrafficSourceDailyAdStatUpsertArgs<ExtArgs>>): Prisma__TrafficSourceDailyAdStatClient<$Result.GetResult<Prisma.$TrafficSourceDailyAdStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrafficSourceDailyAdStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceDailyAdStatCountArgs} args - Arguments to filter TrafficSourceDailyAdStats to count.
     * @example
     * // Count the number of TrafficSourceDailyAdStats
     * const count = await prisma.trafficSourceDailyAdStat.count({
     *   where: {
     *     // ... the filter for the TrafficSourceDailyAdStats we want to count
     *   }
     * })
    **/
    count<T extends TrafficSourceDailyAdStatCountArgs>(
      args?: Subset<T, TrafficSourceDailyAdStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrafficSourceDailyAdStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrafficSourceDailyAdStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceDailyAdStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrafficSourceDailyAdStatAggregateArgs>(args: Subset<T, TrafficSourceDailyAdStatAggregateArgs>): Prisma.PrismaPromise<GetTrafficSourceDailyAdStatAggregateType<T>>

    /**
     * Group by TrafficSourceDailyAdStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceDailyAdStatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrafficSourceDailyAdStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrafficSourceDailyAdStatGroupByArgs['orderBy'] }
        : { orderBy?: TrafficSourceDailyAdStatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrafficSourceDailyAdStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrafficSourceDailyAdStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrafficSourceDailyAdStat model
   */
  readonly fields: TrafficSourceDailyAdStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrafficSourceDailyAdStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrafficSourceDailyAdStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trafficSourceAccount<T extends TrafficSourceAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrafficSourceAccountDefaultArgs<ExtArgs>>): Prisma__TrafficSourceAccountClient<$Result.GetResult<Prisma.$TrafficSourceAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrafficSourceDailyAdStat model
   */
  interface TrafficSourceDailyAdStatFieldRefs {
    readonly id: FieldRef<"TrafficSourceDailyAdStat", 'Int'>
    readonly createDate: FieldRef<"TrafficSourceDailyAdStat", 'DateTime'>
    readonly updateDate: FieldRef<"TrafficSourceDailyAdStat", 'DateTime'>
    readonly spend: FieldRef<"TrafficSourceDailyAdStat", 'Decimal'>
    readonly clicks: FieldRef<"TrafficSourceDailyAdStat", 'Int'>
    readonly externalAdId: FieldRef<"TrafficSourceDailyAdStat", 'String'>
    readonly externalAdSetId: FieldRef<"TrafficSourceDailyAdStat", 'String'>
    readonly externalCampaignId: FieldRef<"TrafficSourceDailyAdStat", 'String'>
    readonly impressions: FieldRef<"TrafficSourceDailyAdStat", 'Int'>
    readonly externalDateStart: FieldRef<"TrafficSourceDailyAdStat", 'DateTime'>
    readonly externalDateStop: FieldRef<"TrafficSourceDailyAdStat", 'DateTime'>
    readonly trafficSourceType: FieldRef<"TrafficSourceDailyAdStat", 'TrafficSourceType'>
    readonly trafficSourceAccountId: FieldRef<"TrafficSourceDailyAdStat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TrafficSourceDailyAdStat findUnique
   */
  export type TrafficSourceDailyAdStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceDailyAdStat
     */
    select?: TrafficSourceDailyAdStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceDailyAdStat
     */
    omit?: TrafficSourceDailyAdStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceDailyAdStatInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceDailyAdStat to fetch.
     */
    where: TrafficSourceDailyAdStatWhereUniqueInput
  }

  /**
   * TrafficSourceDailyAdStat findUniqueOrThrow
   */
  export type TrafficSourceDailyAdStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceDailyAdStat
     */
    select?: TrafficSourceDailyAdStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceDailyAdStat
     */
    omit?: TrafficSourceDailyAdStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceDailyAdStatInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceDailyAdStat to fetch.
     */
    where: TrafficSourceDailyAdStatWhereUniqueInput
  }

  /**
   * TrafficSourceDailyAdStat findFirst
   */
  export type TrafficSourceDailyAdStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceDailyAdStat
     */
    select?: TrafficSourceDailyAdStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceDailyAdStat
     */
    omit?: TrafficSourceDailyAdStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceDailyAdStatInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceDailyAdStat to fetch.
     */
    where?: TrafficSourceDailyAdStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceDailyAdStats to fetch.
     */
    orderBy?: TrafficSourceDailyAdStatOrderByWithRelationInput | TrafficSourceDailyAdStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrafficSourceDailyAdStats.
     */
    cursor?: TrafficSourceDailyAdStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceDailyAdStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceDailyAdStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrafficSourceDailyAdStats.
     */
    distinct?: TrafficSourceDailyAdStatScalarFieldEnum | TrafficSourceDailyAdStatScalarFieldEnum[]
  }

  /**
   * TrafficSourceDailyAdStat findFirstOrThrow
   */
  export type TrafficSourceDailyAdStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceDailyAdStat
     */
    select?: TrafficSourceDailyAdStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceDailyAdStat
     */
    omit?: TrafficSourceDailyAdStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceDailyAdStatInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceDailyAdStat to fetch.
     */
    where?: TrafficSourceDailyAdStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceDailyAdStats to fetch.
     */
    orderBy?: TrafficSourceDailyAdStatOrderByWithRelationInput | TrafficSourceDailyAdStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrafficSourceDailyAdStats.
     */
    cursor?: TrafficSourceDailyAdStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceDailyAdStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceDailyAdStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrafficSourceDailyAdStats.
     */
    distinct?: TrafficSourceDailyAdStatScalarFieldEnum | TrafficSourceDailyAdStatScalarFieldEnum[]
  }

  /**
   * TrafficSourceDailyAdStat findMany
   */
  export type TrafficSourceDailyAdStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceDailyAdStat
     */
    select?: TrafficSourceDailyAdStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceDailyAdStat
     */
    omit?: TrafficSourceDailyAdStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceDailyAdStatInclude<ExtArgs> | null
    /**
     * Filter, which TrafficSourceDailyAdStats to fetch.
     */
    where?: TrafficSourceDailyAdStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSourceDailyAdStats to fetch.
     */
    orderBy?: TrafficSourceDailyAdStatOrderByWithRelationInput | TrafficSourceDailyAdStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrafficSourceDailyAdStats.
     */
    cursor?: TrafficSourceDailyAdStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSourceDailyAdStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSourceDailyAdStats.
     */
    skip?: number
    distinct?: TrafficSourceDailyAdStatScalarFieldEnum | TrafficSourceDailyAdStatScalarFieldEnum[]
  }

  /**
   * TrafficSourceDailyAdStat create
   */
  export type TrafficSourceDailyAdStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceDailyAdStat
     */
    select?: TrafficSourceDailyAdStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceDailyAdStat
     */
    omit?: TrafficSourceDailyAdStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceDailyAdStatInclude<ExtArgs> | null
    /**
     * The data needed to create a TrafficSourceDailyAdStat.
     */
    data: XOR<TrafficSourceDailyAdStatCreateInput, TrafficSourceDailyAdStatUncheckedCreateInput>
  }

  /**
   * TrafficSourceDailyAdStat createMany
   */
  export type TrafficSourceDailyAdStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrafficSourceDailyAdStats.
     */
    data: TrafficSourceDailyAdStatCreateManyInput | TrafficSourceDailyAdStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrafficSourceDailyAdStat createManyAndReturn
   */
  export type TrafficSourceDailyAdStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceDailyAdStat
     */
    select?: TrafficSourceDailyAdStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceDailyAdStat
     */
    omit?: TrafficSourceDailyAdStatOmit<ExtArgs> | null
    /**
     * The data used to create many TrafficSourceDailyAdStats.
     */
    data: TrafficSourceDailyAdStatCreateManyInput | TrafficSourceDailyAdStatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceDailyAdStatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrafficSourceDailyAdStat update
   */
  export type TrafficSourceDailyAdStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceDailyAdStat
     */
    select?: TrafficSourceDailyAdStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceDailyAdStat
     */
    omit?: TrafficSourceDailyAdStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceDailyAdStatInclude<ExtArgs> | null
    /**
     * The data needed to update a TrafficSourceDailyAdStat.
     */
    data: XOR<TrafficSourceDailyAdStatUpdateInput, TrafficSourceDailyAdStatUncheckedUpdateInput>
    /**
     * Choose, which TrafficSourceDailyAdStat to update.
     */
    where: TrafficSourceDailyAdStatWhereUniqueInput
  }

  /**
   * TrafficSourceDailyAdStat updateMany
   */
  export type TrafficSourceDailyAdStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrafficSourceDailyAdStats.
     */
    data: XOR<TrafficSourceDailyAdStatUpdateManyMutationInput, TrafficSourceDailyAdStatUncheckedUpdateManyInput>
    /**
     * Filter which TrafficSourceDailyAdStats to update
     */
    where?: TrafficSourceDailyAdStatWhereInput
    /**
     * Limit how many TrafficSourceDailyAdStats to update.
     */
    limit?: number
  }

  /**
   * TrafficSourceDailyAdStat updateManyAndReturn
   */
  export type TrafficSourceDailyAdStatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceDailyAdStat
     */
    select?: TrafficSourceDailyAdStatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceDailyAdStat
     */
    omit?: TrafficSourceDailyAdStatOmit<ExtArgs> | null
    /**
     * The data used to update TrafficSourceDailyAdStats.
     */
    data: XOR<TrafficSourceDailyAdStatUpdateManyMutationInput, TrafficSourceDailyAdStatUncheckedUpdateManyInput>
    /**
     * Filter which TrafficSourceDailyAdStats to update
     */
    where?: TrafficSourceDailyAdStatWhereInput
    /**
     * Limit how many TrafficSourceDailyAdStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceDailyAdStatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrafficSourceDailyAdStat upsert
   */
  export type TrafficSourceDailyAdStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceDailyAdStat
     */
    select?: TrafficSourceDailyAdStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceDailyAdStat
     */
    omit?: TrafficSourceDailyAdStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceDailyAdStatInclude<ExtArgs> | null
    /**
     * The filter to search for the TrafficSourceDailyAdStat to update in case it exists.
     */
    where: TrafficSourceDailyAdStatWhereUniqueInput
    /**
     * In case the TrafficSourceDailyAdStat found by the `where` argument doesn't exist, create a new TrafficSourceDailyAdStat with this data.
     */
    create: XOR<TrafficSourceDailyAdStatCreateInput, TrafficSourceDailyAdStatUncheckedCreateInput>
    /**
     * In case the TrafficSourceDailyAdStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrafficSourceDailyAdStatUpdateInput, TrafficSourceDailyAdStatUncheckedUpdateInput>
  }

  /**
   * TrafficSourceDailyAdStat delete
   */
  export type TrafficSourceDailyAdStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceDailyAdStat
     */
    select?: TrafficSourceDailyAdStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceDailyAdStat
     */
    omit?: TrafficSourceDailyAdStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceDailyAdStatInclude<ExtArgs> | null
    /**
     * Filter which TrafficSourceDailyAdStat to delete.
     */
    where: TrafficSourceDailyAdStatWhereUniqueInput
  }

  /**
   * TrafficSourceDailyAdStat deleteMany
   */
  export type TrafficSourceDailyAdStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrafficSourceDailyAdStats to delete
     */
    where?: TrafficSourceDailyAdStatWhereInput
    /**
     * Limit how many TrafficSourceDailyAdStats to delete.
     */
    limit?: number
  }

  /**
   * TrafficSourceDailyAdStat without action
   */
  export type TrafficSourceDailyAdStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafficSourceDailyAdStat
     */
    select?: TrafficSourceDailyAdStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficSourceDailyAdStat
     */
    omit?: TrafficSourceDailyAdStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficSourceDailyAdStatInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ApiAccessScalarFieldEnum: {
    id: 'id',
    createDate: 'createDate',
    updateDate: 'updateDate',
    trafficSourceType: 'trafficSourceType',
    apiAccessType: 'apiAccessType',
    isActive: 'isActive',
    name: 'name',
    login: 'login',
    password: 'password',
    firstAccessToken: 'firstAccessToken',
    secondAccessToken: 'secondAccessToken'
  };

  export type ApiAccessScalarFieldEnum = (typeof ApiAccessScalarFieldEnum)[keyof typeof ApiAccessScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    createDate: 'createDate',
    name: 'name',
    message: 'message',
    isError: 'isError',
    workerId: 'workerId',
    stack: 'stack',
    request: 'request',
    response: 'response',
    data: 'data'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    createDate: 'createDate',
    updateDate: 'updateDate',
    isActive: 'isActive',
    name: 'name',
    minWorkerThreads: 'minWorkerThreads',
    maxWorkerThreads: 'maxWorkerThreads'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const TaskLoopScalarFieldEnum: {
    id: 'id',
    createDate: 'createDate',
    updateDate: 'updateDate',
    type: 'type',
    payload: 'payload',
    intervalMin: 'intervalMin',
    isActive: 'isActive'
  };

  export type TaskLoopScalarFieldEnum = (typeof TaskLoopScalarFieldEnum)[keyof typeof TaskLoopScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    createDate: 'createDate',
    updateDate: 'updateDate',
    type: 'type',
    payload: 'payload',
    status: 'status',
    result: 'result',
    error: 'error',
    startTime: 'startTime',
    endTime: 'endTime',
    taskLoopId: 'taskLoopId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TrafficSourceAccountScalarFieldEnum: {
    id: 'id',
    createDate: 'createDate',
    updateDate: 'updateDate',
    trafficSourceType: 'trafficSourceType',
    externalId: 'externalId',
    name: 'name',
    externalStatus: 'externalStatus',
    externalCreatedTime: 'externalCreatedTime',
    status: 'status',
    balance: 'balance',
    externalCurrency: 'externalCurrency',
    externalTimezone: 'externalTimezone',
    spendCap: 'spendCap',
    amountSpent: 'amountSpent',
    isActive: 'isActive',
    trafficSourceOwnerBmId: 'trafficSourceOwnerBmId'
  };

  export type TrafficSourceAccountScalarFieldEnum = (typeof TrafficSourceAccountScalarFieldEnum)[keyof typeof TrafficSourceAccountScalarFieldEnum]


  export const TrafficSourceAccountToTrafficSourceBmScalarFieldEnum: {
    id: 'id',
    createDate: 'createDate',
    updateDate: 'updateDate',
    trafficSourceBmId: 'trafficSourceBmId',
    trafficSourceAccountId: 'trafficSourceAccountId'
  };

  export type TrafficSourceAccountToTrafficSourceBmScalarFieldEnum = (typeof TrafficSourceAccountToTrafficSourceBmScalarFieldEnum)[keyof typeof TrafficSourceAccountToTrafficSourceBmScalarFieldEnum]


  export const TrafficSourceBmScalarFieldEnum: {
    id: 'id',
    createDate: 'createDate',
    updateDate: 'updateDate',
    trafficSourceType: 'trafficSourceType',
    externalId: 'externalId',
    name: 'name',
    isActive: 'isActive'
  };

  export type TrafficSourceBmScalarFieldEnum = (typeof TrafficSourceBmScalarFieldEnum)[keyof typeof TrafficSourceBmScalarFieldEnum]


  export const TrafficSourceBmToApiAccessScalarFieldEnum: {
    id: 'id',
    createDate: 'createDate',
    updateDate: 'updateDate',
    trafficSourceBmId: 'trafficSourceBmId',
    apiAccessId: 'apiAccessId'
  };

  export type TrafficSourceBmToApiAccessScalarFieldEnum = (typeof TrafficSourceBmToApiAccessScalarFieldEnum)[keyof typeof TrafficSourceBmToApiAccessScalarFieldEnum]


  export const TrafficSourceDailyAdStatScalarFieldEnum: {
    id: 'id',
    createDate: 'createDate',
    updateDate: 'updateDate',
    spend: 'spend',
    clicks: 'clicks',
    externalAdId: 'externalAdId',
    externalAdSetId: 'externalAdSetId',
    externalCampaignId: 'externalCampaignId',
    impressions: 'impressions',
    externalDateStart: 'externalDateStart',
    externalDateStop: 'externalDateStop',
    trafficSourceType: 'trafficSourceType',
    trafficSourceAccountId: 'trafficSourceAccountId'
  };

  export type TrafficSourceDailyAdStatScalarFieldEnum = (typeof TrafficSourceDailyAdStatScalarFieldEnum)[keyof typeof TrafficSourceDailyAdStatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TrafficSourceType'
   */
  export type EnumTrafficSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrafficSourceType'>
    


  /**
   * Reference to a field of type 'TrafficSourceType[]'
   */
  export type ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrafficSourceType[]'>
    


  /**
   * Reference to a field of type 'ApiAccessType'
   */
  export type EnumApiAccessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiAccessType'>
    


  /**
   * Reference to a field of type 'ApiAccessType[]'
   */
  export type ListEnumApiAccessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiAccessType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TaskType'
   */
  export type EnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType'>
    


  /**
   * Reference to a field of type 'TaskType[]'
   */
  export type ListEnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'TrafficSourceAccountStatus'
   */
  export type EnumTrafficSourceAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrafficSourceAccountStatus'>
    


  /**
   * Reference to a field of type 'TrafficSourceAccountStatus[]'
   */
  export type ListEnumTrafficSourceAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrafficSourceAccountStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    
  /**
   * Deep Input Types
   */


  export type ApiAccessWhereInput = {
    AND?: ApiAccessWhereInput | ApiAccessWhereInput[]
    OR?: ApiAccessWhereInput[]
    NOT?: ApiAccessWhereInput | ApiAccessWhereInput[]
    id?: IntFilter<"ApiAccess"> | number
    createDate?: DateTimeFilter<"ApiAccess"> | Date | string
    updateDate?: DateTimeFilter<"ApiAccess"> | Date | string
    trafficSourceType?: EnumTrafficSourceTypeNullableFilter<"ApiAccess"> | $Enums.TrafficSourceType | null
    apiAccessType?: EnumApiAccessTypeFilter<"ApiAccess"> | $Enums.ApiAccessType
    isActive?: BoolFilter<"ApiAccess"> | boolean
    name?: StringFilter<"ApiAccess"> | string
    login?: StringNullableFilter<"ApiAccess"> | string | null
    password?: StringNullableFilter<"ApiAccess"> | string | null
    firstAccessToken?: StringNullableFilter<"ApiAccess"> | string | null
    secondAccessToken?: StringNullableFilter<"ApiAccess"> | string | null
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessListRelationFilter
  }

  export type ApiAccessOrderByWithRelationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceType?: SortOrderInput | SortOrder
    apiAccessType?: SortOrder
    isActive?: SortOrder
    name?: SortOrder
    login?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    firstAccessToken?: SortOrderInput | SortOrder
    secondAccessToken?: SortOrderInput | SortOrder
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessOrderByRelationAggregateInput
  }

  export type ApiAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApiAccessWhereInput | ApiAccessWhereInput[]
    OR?: ApiAccessWhereInput[]
    NOT?: ApiAccessWhereInput | ApiAccessWhereInput[]
    createDate?: DateTimeFilter<"ApiAccess"> | Date | string
    updateDate?: DateTimeFilter<"ApiAccess"> | Date | string
    trafficSourceType?: EnumTrafficSourceTypeNullableFilter<"ApiAccess"> | $Enums.TrafficSourceType | null
    apiAccessType?: EnumApiAccessTypeFilter<"ApiAccess"> | $Enums.ApiAccessType
    isActive?: BoolFilter<"ApiAccess"> | boolean
    name?: StringFilter<"ApiAccess"> | string
    login?: StringNullableFilter<"ApiAccess"> | string | null
    password?: StringNullableFilter<"ApiAccess"> | string | null
    firstAccessToken?: StringNullableFilter<"ApiAccess"> | string | null
    secondAccessToken?: StringNullableFilter<"ApiAccess"> | string | null
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessListRelationFilter
  }, "id">

  export type ApiAccessOrderByWithAggregationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceType?: SortOrderInput | SortOrder
    apiAccessType?: SortOrder
    isActive?: SortOrder
    name?: SortOrder
    login?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    firstAccessToken?: SortOrderInput | SortOrder
    secondAccessToken?: SortOrderInput | SortOrder
    _count?: ApiAccessCountOrderByAggregateInput
    _avg?: ApiAccessAvgOrderByAggregateInput
    _max?: ApiAccessMaxOrderByAggregateInput
    _min?: ApiAccessMinOrderByAggregateInput
    _sum?: ApiAccessSumOrderByAggregateInput
  }

  export type ApiAccessScalarWhereWithAggregatesInput = {
    AND?: ApiAccessScalarWhereWithAggregatesInput | ApiAccessScalarWhereWithAggregatesInput[]
    OR?: ApiAccessScalarWhereWithAggregatesInput[]
    NOT?: ApiAccessScalarWhereWithAggregatesInput | ApiAccessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApiAccess"> | number
    createDate?: DateTimeWithAggregatesFilter<"ApiAccess"> | Date | string
    updateDate?: DateTimeWithAggregatesFilter<"ApiAccess"> | Date | string
    trafficSourceType?: EnumTrafficSourceTypeNullableWithAggregatesFilter<"ApiAccess"> | $Enums.TrafficSourceType | null
    apiAccessType?: EnumApiAccessTypeWithAggregatesFilter<"ApiAccess"> | $Enums.ApiAccessType
    isActive?: BoolWithAggregatesFilter<"ApiAccess"> | boolean
    name?: StringWithAggregatesFilter<"ApiAccess"> | string
    login?: StringNullableWithAggregatesFilter<"ApiAccess"> | string | null
    password?: StringNullableWithAggregatesFilter<"ApiAccess"> | string | null
    firstAccessToken?: StringNullableWithAggregatesFilter<"ApiAccess"> | string | null
    secondAccessToken?: StringNullableWithAggregatesFilter<"ApiAccess"> | string | null
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: IntFilter<"Log"> | number
    createDate?: DateTimeFilter<"Log"> | Date | string
    name?: StringNullableFilter<"Log"> | string | null
    message?: StringNullableFilter<"Log"> | string | null
    isError?: BoolFilter<"Log"> | boolean
    workerId?: IntNullableFilter<"Log"> | number | null
    stack?: StringNullableFilter<"Log"> | string | null
    request?: StringNullableFilter<"Log"> | string | null
    response?: StringNullableFilter<"Log"> | string | null
    data?: StringNullableFilter<"Log"> | string | null
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    createDate?: SortOrder
    name?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    isError?: SortOrder
    workerId?: SortOrderInput | SortOrder
    stack?: SortOrderInput | SortOrder
    request?: SortOrderInput | SortOrder
    response?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    createDate?: DateTimeFilter<"Log"> | Date | string
    name?: StringNullableFilter<"Log"> | string | null
    message?: StringNullableFilter<"Log"> | string | null
    isError?: BoolFilter<"Log"> | boolean
    workerId?: IntNullableFilter<"Log"> | number | null
    stack?: StringNullableFilter<"Log"> | string | null
    request?: StringNullableFilter<"Log"> | string | null
    response?: StringNullableFilter<"Log"> | string | null
    data?: StringNullableFilter<"Log"> | string | null
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    createDate?: SortOrder
    name?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    isError?: SortOrder
    workerId?: SortOrderInput | SortOrder
    stack?: SortOrderInput | SortOrder
    request?: SortOrderInput | SortOrder
    response?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    _count?: LogCountOrderByAggregateInput
    _avg?: LogAvgOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
    _sum?: LogSumOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Log"> | number
    createDate?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    name?: StringNullableWithAggregatesFilter<"Log"> | string | null
    message?: StringNullableWithAggregatesFilter<"Log"> | string | null
    isError?: BoolWithAggregatesFilter<"Log"> | boolean
    workerId?: IntNullableWithAggregatesFilter<"Log"> | number | null
    stack?: StringNullableWithAggregatesFilter<"Log"> | string | null
    request?: StringNullableWithAggregatesFilter<"Log"> | string | null
    response?: StringNullableWithAggregatesFilter<"Log"> | string | null
    data?: StringNullableWithAggregatesFilter<"Log"> | string | null
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: IntFilter<"Settings"> | number
    createDate?: DateTimeFilter<"Settings"> | Date | string
    updateDate?: DateTimeFilter<"Settings"> | Date | string
    isActive?: BoolFilter<"Settings"> | boolean
    name?: StringFilter<"Settings"> | string
    minWorkerThreads?: IntFilter<"Settings"> | number
    maxWorkerThreads?: IntFilter<"Settings"> | number
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    isActive?: SortOrder
    name?: SortOrder
    minWorkerThreads?: SortOrder
    maxWorkerThreads?: SortOrder
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    createDate?: DateTimeFilter<"Settings"> | Date | string
    updateDate?: DateTimeFilter<"Settings"> | Date | string
    isActive?: BoolFilter<"Settings"> | boolean
    name?: StringFilter<"Settings"> | string
    minWorkerThreads?: IntFilter<"Settings"> | number
    maxWorkerThreads?: IntFilter<"Settings"> | number
  }, "id">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    isActive?: SortOrder
    name?: SortOrder
    minWorkerThreads?: SortOrder
    maxWorkerThreads?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Settings"> | number
    createDate?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
    updateDate?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Settings"> | boolean
    name?: StringWithAggregatesFilter<"Settings"> | string
    minWorkerThreads?: IntWithAggregatesFilter<"Settings"> | number
    maxWorkerThreads?: IntWithAggregatesFilter<"Settings"> | number
  }

  export type TaskLoopWhereInput = {
    AND?: TaskLoopWhereInput | TaskLoopWhereInput[]
    OR?: TaskLoopWhereInput[]
    NOT?: TaskLoopWhereInput | TaskLoopWhereInput[]
    id?: IntFilter<"TaskLoop"> | number
    createDate?: DateTimeFilter<"TaskLoop"> | Date | string
    updateDate?: DateTimeFilter<"TaskLoop"> | Date | string
    type?: EnumTaskTypeFilter<"TaskLoop"> | $Enums.TaskType
    payload?: JsonNullableFilter<"TaskLoop">
    intervalMin?: FloatFilter<"TaskLoop"> | number
    isActive?: BoolFilter<"TaskLoop"> | boolean
    tasks?: TaskListRelationFilter
  }

  export type TaskLoopOrderByWithRelationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    type?: SortOrder
    payload?: SortOrderInput | SortOrder
    intervalMin?: SortOrder
    isActive?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type TaskLoopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskLoopWhereInput | TaskLoopWhereInput[]
    OR?: TaskLoopWhereInput[]
    NOT?: TaskLoopWhereInput | TaskLoopWhereInput[]
    createDate?: DateTimeFilter<"TaskLoop"> | Date | string
    updateDate?: DateTimeFilter<"TaskLoop"> | Date | string
    type?: EnumTaskTypeFilter<"TaskLoop"> | $Enums.TaskType
    payload?: JsonNullableFilter<"TaskLoop">
    intervalMin?: FloatFilter<"TaskLoop"> | number
    isActive?: BoolFilter<"TaskLoop"> | boolean
    tasks?: TaskListRelationFilter
  }, "id">

  export type TaskLoopOrderByWithAggregationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    type?: SortOrder
    payload?: SortOrderInput | SortOrder
    intervalMin?: SortOrder
    isActive?: SortOrder
    _count?: TaskLoopCountOrderByAggregateInput
    _avg?: TaskLoopAvgOrderByAggregateInput
    _max?: TaskLoopMaxOrderByAggregateInput
    _min?: TaskLoopMinOrderByAggregateInput
    _sum?: TaskLoopSumOrderByAggregateInput
  }

  export type TaskLoopScalarWhereWithAggregatesInput = {
    AND?: TaskLoopScalarWhereWithAggregatesInput | TaskLoopScalarWhereWithAggregatesInput[]
    OR?: TaskLoopScalarWhereWithAggregatesInput[]
    NOT?: TaskLoopScalarWhereWithAggregatesInput | TaskLoopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskLoop"> | number
    createDate?: DateTimeWithAggregatesFilter<"TaskLoop"> | Date | string
    updateDate?: DateTimeWithAggregatesFilter<"TaskLoop"> | Date | string
    type?: EnumTaskTypeWithAggregatesFilter<"TaskLoop"> | $Enums.TaskType
    payload?: JsonNullableWithAggregatesFilter<"TaskLoop">
    intervalMin?: FloatWithAggregatesFilter<"TaskLoop"> | number
    isActive?: BoolWithAggregatesFilter<"TaskLoop"> | boolean
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    createDate?: DateTimeFilter<"Task"> | Date | string
    updateDate?: DateTimeFilter<"Task"> | Date | string
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    payload?: JsonNullableFilter<"Task">
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    result?: JsonNullableFilter<"Task">
    error?: StringNullableFilter<"Task"> | string | null
    startTime?: DateTimeNullableFilter<"Task"> | Date | string | null
    endTime?: DateTimeNullableFilter<"Task"> | Date | string | null
    taskLoopId?: IntNullableFilter<"Task"> | number | null
    taskLoop?: XOR<TaskLoopNullableScalarRelationFilter, TaskLoopWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    type?: SortOrder
    payload?: SortOrderInput | SortOrder
    status?: SortOrder
    result?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    taskLoopId?: SortOrderInput | SortOrder
    taskLoop?: TaskLoopOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    createDate?: DateTimeFilter<"Task"> | Date | string
    updateDate?: DateTimeFilter<"Task"> | Date | string
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    payload?: JsonNullableFilter<"Task">
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    result?: JsonNullableFilter<"Task">
    error?: StringNullableFilter<"Task"> | string | null
    startTime?: DateTimeNullableFilter<"Task"> | Date | string | null
    endTime?: DateTimeNullableFilter<"Task"> | Date | string | null
    taskLoopId?: IntNullableFilter<"Task"> | number | null
    taskLoop?: XOR<TaskLoopNullableScalarRelationFilter, TaskLoopWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    type?: SortOrder
    payload?: SortOrderInput | SortOrder
    status?: SortOrder
    result?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    taskLoopId?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    createDate?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updateDate?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    type?: EnumTaskTypeWithAggregatesFilter<"Task"> | $Enums.TaskType
    payload?: JsonNullableWithAggregatesFilter<"Task">
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    result?: JsonNullableWithAggregatesFilter<"Task">
    error?: StringNullableWithAggregatesFilter<"Task"> | string | null
    startTime?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    endTime?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    taskLoopId?: IntNullableWithAggregatesFilter<"Task"> | number | null
  }

  export type TrafficSourceAccountWhereInput = {
    AND?: TrafficSourceAccountWhereInput | TrafficSourceAccountWhereInput[]
    OR?: TrafficSourceAccountWhereInput[]
    NOT?: TrafficSourceAccountWhereInput | TrafficSourceAccountWhereInput[]
    id?: IntFilter<"TrafficSourceAccount"> | number
    createDate?: DateTimeFilter<"TrafficSourceAccount"> | Date | string
    updateDate?: DateTimeFilter<"TrafficSourceAccount"> | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFilter<"TrafficSourceAccount"> | $Enums.TrafficSourceType
    externalId?: StringFilter<"TrafficSourceAccount"> | string
    name?: StringFilter<"TrafficSourceAccount"> | string
    externalStatus?: StringFilter<"TrafficSourceAccount"> | string
    externalCreatedTime?: DateTimeFilter<"TrafficSourceAccount"> | Date | string
    status?: EnumTrafficSourceAccountStatusNullableFilter<"TrafficSourceAccount"> | $Enums.TrafficSourceAccountStatus | null
    balance?: DecimalFilter<"TrafficSourceAccount"> | Decimal | DecimalJsLike | number | string
    externalCurrency?: StringFilter<"TrafficSourceAccount"> | string
    externalTimezone?: StringFilter<"TrafficSourceAccount"> | string
    spendCap?: DecimalFilter<"TrafficSourceAccount"> | Decimal | DecimalJsLike | number | string
    amountSpent?: DecimalFilter<"TrafficSourceAccount"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"TrafficSourceAccount"> | boolean
    trafficSourceOwnerBmId?: IntNullableFilter<"TrafficSourceAccount"> | number | null
    trafficSourceOwnerBm?: XOR<TrafficSourceBmNullableScalarRelationFilter, TrafficSourceBmWhereInput> | null
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmListRelationFilter
    trafficSourceDailyAdStats?: TrafficSourceDailyAdStatListRelationFilter
  }

  export type TrafficSourceAccountOrderByWithRelationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceType?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    externalStatus?: SortOrder
    externalCreatedTime?: SortOrder
    status?: SortOrderInput | SortOrder
    balance?: SortOrder
    externalCurrency?: SortOrder
    externalTimezone?: SortOrder
    spendCap?: SortOrder
    amountSpent?: SortOrder
    isActive?: SortOrder
    trafficSourceOwnerBmId?: SortOrderInput | SortOrder
    trafficSourceOwnerBm?: TrafficSourceBmOrderByWithRelationInput
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmOrderByRelationAggregateInput
    trafficSourceDailyAdStats?: TrafficSourceDailyAdStatOrderByRelationAggregateInput
  }

  export type TrafficSourceAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trafficSourceType_externalId?: TrafficSourceAccountTrafficSourceTypeExternalIdCompoundUniqueInput
    AND?: TrafficSourceAccountWhereInput | TrafficSourceAccountWhereInput[]
    OR?: TrafficSourceAccountWhereInput[]
    NOT?: TrafficSourceAccountWhereInput | TrafficSourceAccountWhereInput[]
    createDate?: DateTimeFilter<"TrafficSourceAccount"> | Date | string
    updateDate?: DateTimeFilter<"TrafficSourceAccount"> | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFilter<"TrafficSourceAccount"> | $Enums.TrafficSourceType
    externalId?: StringFilter<"TrafficSourceAccount"> | string
    name?: StringFilter<"TrafficSourceAccount"> | string
    externalStatus?: StringFilter<"TrafficSourceAccount"> | string
    externalCreatedTime?: DateTimeFilter<"TrafficSourceAccount"> | Date | string
    status?: EnumTrafficSourceAccountStatusNullableFilter<"TrafficSourceAccount"> | $Enums.TrafficSourceAccountStatus | null
    balance?: DecimalFilter<"TrafficSourceAccount"> | Decimal | DecimalJsLike | number | string
    externalCurrency?: StringFilter<"TrafficSourceAccount"> | string
    externalTimezone?: StringFilter<"TrafficSourceAccount"> | string
    spendCap?: DecimalFilter<"TrafficSourceAccount"> | Decimal | DecimalJsLike | number | string
    amountSpent?: DecimalFilter<"TrafficSourceAccount"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"TrafficSourceAccount"> | boolean
    trafficSourceOwnerBmId?: IntNullableFilter<"TrafficSourceAccount"> | number | null
    trafficSourceOwnerBm?: XOR<TrafficSourceBmNullableScalarRelationFilter, TrafficSourceBmWhereInput> | null
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmListRelationFilter
    trafficSourceDailyAdStats?: TrafficSourceDailyAdStatListRelationFilter
  }, "id" | "trafficSourceType_externalId">

  export type TrafficSourceAccountOrderByWithAggregationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceType?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    externalStatus?: SortOrder
    externalCreatedTime?: SortOrder
    status?: SortOrderInput | SortOrder
    balance?: SortOrder
    externalCurrency?: SortOrder
    externalTimezone?: SortOrder
    spendCap?: SortOrder
    amountSpent?: SortOrder
    isActive?: SortOrder
    trafficSourceOwnerBmId?: SortOrderInput | SortOrder
    _count?: TrafficSourceAccountCountOrderByAggregateInput
    _avg?: TrafficSourceAccountAvgOrderByAggregateInput
    _max?: TrafficSourceAccountMaxOrderByAggregateInput
    _min?: TrafficSourceAccountMinOrderByAggregateInput
    _sum?: TrafficSourceAccountSumOrderByAggregateInput
  }

  export type TrafficSourceAccountScalarWhereWithAggregatesInput = {
    AND?: TrafficSourceAccountScalarWhereWithAggregatesInput | TrafficSourceAccountScalarWhereWithAggregatesInput[]
    OR?: TrafficSourceAccountScalarWhereWithAggregatesInput[]
    NOT?: TrafficSourceAccountScalarWhereWithAggregatesInput | TrafficSourceAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrafficSourceAccount"> | number
    createDate?: DateTimeWithAggregatesFilter<"TrafficSourceAccount"> | Date | string
    updateDate?: DateTimeWithAggregatesFilter<"TrafficSourceAccount"> | Date | string
    trafficSourceType?: EnumTrafficSourceTypeWithAggregatesFilter<"TrafficSourceAccount"> | $Enums.TrafficSourceType
    externalId?: StringWithAggregatesFilter<"TrafficSourceAccount"> | string
    name?: StringWithAggregatesFilter<"TrafficSourceAccount"> | string
    externalStatus?: StringWithAggregatesFilter<"TrafficSourceAccount"> | string
    externalCreatedTime?: DateTimeWithAggregatesFilter<"TrafficSourceAccount"> | Date | string
    status?: EnumTrafficSourceAccountStatusNullableWithAggregatesFilter<"TrafficSourceAccount"> | $Enums.TrafficSourceAccountStatus | null
    balance?: DecimalWithAggregatesFilter<"TrafficSourceAccount"> | Decimal | DecimalJsLike | number | string
    externalCurrency?: StringWithAggregatesFilter<"TrafficSourceAccount"> | string
    externalTimezone?: StringWithAggregatesFilter<"TrafficSourceAccount"> | string
    spendCap?: DecimalWithAggregatesFilter<"TrafficSourceAccount"> | Decimal | DecimalJsLike | number | string
    amountSpent?: DecimalWithAggregatesFilter<"TrafficSourceAccount"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter<"TrafficSourceAccount"> | boolean
    trafficSourceOwnerBmId?: IntNullableWithAggregatesFilter<"TrafficSourceAccount"> | number | null
  }

  export type TrafficSourceAccountToTrafficSourceBmWhereInput = {
    AND?: TrafficSourceAccountToTrafficSourceBmWhereInput | TrafficSourceAccountToTrafficSourceBmWhereInput[]
    OR?: TrafficSourceAccountToTrafficSourceBmWhereInput[]
    NOT?: TrafficSourceAccountToTrafficSourceBmWhereInput | TrafficSourceAccountToTrafficSourceBmWhereInput[]
    id?: IntFilter<"TrafficSourceAccountToTrafficSourceBm"> | number
    createDate?: DateTimeFilter<"TrafficSourceAccountToTrafficSourceBm"> | Date | string
    updateDate?: DateTimeFilter<"TrafficSourceAccountToTrafficSourceBm"> | Date | string
    trafficSourceBmId?: IntFilter<"TrafficSourceAccountToTrafficSourceBm"> | number
    trafficSourceAccountId?: IntFilter<"TrafficSourceAccountToTrafficSourceBm"> | number
    trafficSourceBm?: XOR<TrafficSourceBmScalarRelationFilter, TrafficSourceBmWhereInput>
    trafficSourceAccount?: XOR<TrafficSourceAccountScalarRelationFilter, TrafficSourceAccountWhereInput>
  }

  export type TrafficSourceAccountToTrafficSourceBmOrderByWithRelationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceBmId?: SortOrder
    trafficSourceAccountId?: SortOrder
    trafficSourceBm?: TrafficSourceBmOrderByWithRelationInput
    trafficSourceAccount?: TrafficSourceAccountOrderByWithRelationInput
  }

  export type TrafficSourceAccountToTrafficSourceBmWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trafficSourceBmId_trafficSourceAccountId?: TrafficSourceAccountToTrafficSourceBmTrafficSourceBmIdTrafficSourceAccountIdCompoundUniqueInput
    AND?: TrafficSourceAccountToTrafficSourceBmWhereInput | TrafficSourceAccountToTrafficSourceBmWhereInput[]
    OR?: TrafficSourceAccountToTrafficSourceBmWhereInput[]
    NOT?: TrafficSourceAccountToTrafficSourceBmWhereInput | TrafficSourceAccountToTrafficSourceBmWhereInput[]
    createDate?: DateTimeFilter<"TrafficSourceAccountToTrafficSourceBm"> | Date | string
    updateDate?: DateTimeFilter<"TrafficSourceAccountToTrafficSourceBm"> | Date | string
    trafficSourceBmId?: IntFilter<"TrafficSourceAccountToTrafficSourceBm"> | number
    trafficSourceAccountId?: IntFilter<"TrafficSourceAccountToTrafficSourceBm"> | number
    trafficSourceBm?: XOR<TrafficSourceBmScalarRelationFilter, TrafficSourceBmWhereInput>
    trafficSourceAccount?: XOR<TrafficSourceAccountScalarRelationFilter, TrafficSourceAccountWhereInput>
  }, "id" | "trafficSourceBmId_trafficSourceAccountId">

  export type TrafficSourceAccountToTrafficSourceBmOrderByWithAggregationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceBmId?: SortOrder
    trafficSourceAccountId?: SortOrder
    _count?: TrafficSourceAccountToTrafficSourceBmCountOrderByAggregateInput
    _avg?: TrafficSourceAccountToTrafficSourceBmAvgOrderByAggregateInput
    _max?: TrafficSourceAccountToTrafficSourceBmMaxOrderByAggregateInput
    _min?: TrafficSourceAccountToTrafficSourceBmMinOrderByAggregateInput
    _sum?: TrafficSourceAccountToTrafficSourceBmSumOrderByAggregateInput
  }

  export type TrafficSourceAccountToTrafficSourceBmScalarWhereWithAggregatesInput = {
    AND?: TrafficSourceAccountToTrafficSourceBmScalarWhereWithAggregatesInput | TrafficSourceAccountToTrafficSourceBmScalarWhereWithAggregatesInput[]
    OR?: TrafficSourceAccountToTrafficSourceBmScalarWhereWithAggregatesInput[]
    NOT?: TrafficSourceAccountToTrafficSourceBmScalarWhereWithAggregatesInput | TrafficSourceAccountToTrafficSourceBmScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrafficSourceAccountToTrafficSourceBm"> | number
    createDate?: DateTimeWithAggregatesFilter<"TrafficSourceAccountToTrafficSourceBm"> | Date | string
    updateDate?: DateTimeWithAggregatesFilter<"TrafficSourceAccountToTrafficSourceBm"> | Date | string
    trafficSourceBmId?: IntWithAggregatesFilter<"TrafficSourceAccountToTrafficSourceBm"> | number
    trafficSourceAccountId?: IntWithAggregatesFilter<"TrafficSourceAccountToTrafficSourceBm"> | number
  }

  export type TrafficSourceBmWhereInput = {
    AND?: TrafficSourceBmWhereInput | TrafficSourceBmWhereInput[]
    OR?: TrafficSourceBmWhereInput[]
    NOT?: TrafficSourceBmWhereInput | TrafficSourceBmWhereInput[]
    id?: IntFilter<"TrafficSourceBm"> | number
    createDate?: DateTimeFilter<"TrafficSourceBm"> | Date | string
    updateDate?: DateTimeFilter<"TrafficSourceBm"> | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFilter<"TrafficSourceBm"> | $Enums.TrafficSourceType
    externalId?: StringFilter<"TrafficSourceBm"> | string
    name?: StringFilter<"TrafficSourceBm"> | string
    isActive?: BoolFilter<"TrafficSourceBm"> | boolean
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessListRelationFilter
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmListRelationFilter
    accountsOwned?: TrafficSourceAccountListRelationFilter
  }

  export type TrafficSourceBmOrderByWithRelationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceType?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessOrderByRelationAggregateInput
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmOrderByRelationAggregateInput
    accountsOwned?: TrafficSourceAccountOrderByRelationAggregateInput
  }

  export type TrafficSourceBmWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trafficSourceType_externalId?: TrafficSourceBmTrafficSourceTypeExternalIdCompoundUniqueInput
    AND?: TrafficSourceBmWhereInput | TrafficSourceBmWhereInput[]
    OR?: TrafficSourceBmWhereInput[]
    NOT?: TrafficSourceBmWhereInput | TrafficSourceBmWhereInput[]
    createDate?: DateTimeFilter<"TrafficSourceBm"> | Date | string
    updateDate?: DateTimeFilter<"TrafficSourceBm"> | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFilter<"TrafficSourceBm"> | $Enums.TrafficSourceType
    externalId?: StringFilter<"TrafficSourceBm"> | string
    name?: StringFilter<"TrafficSourceBm"> | string
    isActive?: BoolFilter<"TrafficSourceBm"> | boolean
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessListRelationFilter
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmListRelationFilter
    accountsOwned?: TrafficSourceAccountListRelationFilter
  }, "id" | "trafficSourceType_externalId">

  export type TrafficSourceBmOrderByWithAggregationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceType?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    _count?: TrafficSourceBmCountOrderByAggregateInput
    _avg?: TrafficSourceBmAvgOrderByAggregateInput
    _max?: TrafficSourceBmMaxOrderByAggregateInput
    _min?: TrafficSourceBmMinOrderByAggregateInput
    _sum?: TrafficSourceBmSumOrderByAggregateInput
  }

  export type TrafficSourceBmScalarWhereWithAggregatesInput = {
    AND?: TrafficSourceBmScalarWhereWithAggregatesInput | TrafficSourceBmScalarWhereWithAggregatesInput[]
    OR?: TrafficSourceBmScalarWhereWithAggregatesInput[]
    NOT?: TrafficSourceBmScalarWhereWithAggregatesInput | TrafficSourceBmScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrafficSourceBm"> | number
    createDate?: DateTimeWithAggregatesFilter<"TrafficSourceBm"> | Date | string
    updateDate?: DateTimeWithAggregatesFilter<"TrafficSourceBm"> | Date | string
    trafficSourceType?: EnumTrafficSourceTypeWithAggregatesFilter<"TrafficSourceBm"> | $Enums.TrafficSourceType
    externalId?: StringWithAggregatesFilter<"TrafficSourceBm"> | string
    name?: StringWithAggregatesFilter<"TrafficSourceBm"> | string
    isActive?: BoolWithAggregatesFilter<"TrafficSourceBm"> | boolean
  }

  export type TrafficSourceBmToApiAccessWhereInput = {
    AND?: TrafficSourceBmToApiAccessWhereInput | TrafficSourceBmToApiAccessWhereInput[]
    OR?: TrafficSourceBmToApiAccessWhereInput[]
    NOT?: TrafficSourceBmToApiAccessWhereInput | TrafficSourceBmToApiAccessWhereInput[]
    id?: IntFilter<"TrafficSourceBmToApiAccess"> | number
    createDate?: DateTimeFilter<"TrafficSourceBmToApiAccess"> | Date | string
    updateDate?: DateTimeFilter<"TrafficSourceBmToApiAccess"> | Date | string
    trafficSourceBmId?: IntFilter<"TrafficSourceBmToApiAccess"> | number
    apiAccessId?: IntFilter<"TrafficSourceBmToApiAccess"> | number
    trafficSourceBm?: XOR<TrafficSourceBmScalarRelationFilter, TrafficSourceBmWhereInput>
    apiAccess?: XOR<ApiAccessScalarRelationFilter, ApiAccessWhereInput>
  }

  export type TrafficSourceBmToApiAccessOrderByWithRelationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceBmId?: SortOrder
    apiAccessId?: SortOrder
    trafficSourceBm?: TrafficSourceBmOrderByWithRelationInput
    apiAccess?: ApiAccessOrderByWithRelationInput
  }

  export type TrafficSourceBmToApiAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trafficSourceBmId_apiAccessId?: TrafficSourceBmToApiAccessTrafficSourceBmIdApiAccessIdCompoundUniqueInput
    AND?: TrafficSourceBmToApiAccessWhereInput | TrafficSourceBmToApiAccessWhereInput[]
    OR?: TrafficSourceBmToApiAccessWhereInput[]
    NOT?: TrafficSourceBmToApiAccessWhereInput | TrafficSourceBmToApiAccessWhereInput[]
    createDate?: DateTimeFilter<"TrafficSourceBmToApiAccess"> | Date | string
    updateDate?: DateTimeFilter<"TrafficSourceBmToApiAccess"> | Date | string
    trafficSourceBmId?: IntFilter<"TrafficSourceBmToApiAccess"> | number
    apiAccessId?: IntFilter<"TrafficSourceBmToApiAccess"> | number
    trafficSourceBm?: XOR<TrafficSourceBmScalarRelationFilter, TrafficSourceBmWhereInput>
    apiAccess?: XOR<ApiAccessScalarRelationFilter, ApiAccessWhereInput>
  }, "id" | "trafficSourceBmId_apiAccessId">

  export type TrafficSourceBmToApiAccessOrderByWithAggregationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceBmId?: SortOrder
    apiAccessId?: SortOrder
    _count?: TrafficSourceBmToApiAccessCountOrderByAggregateInput
    _avg?: TrafficSourceBmToApiAccessAvgOrderByAggregateInput
    _max?: TrafficSourceBmToApiAccessMaxOrderByAggregateInput
    _min?: TrafficSourceBmToApiAccessMinOrderByAggregateInput
    _sum?: TrafficSourceBmToApiAccessSumOrderByAggregateInput
  }

  export type TrafficSourceBmToApiAccessScalarWhereWithAggregatesInput = {
    AND?: TrafficSourceBmToApiAccessScalarWhereWithAggregatesInput | TrafficSourceBmToApiAccessScalarWhereWithAggregatesInput[]
    OR?: TrafficSourceBmToApiAccessScalarWhereWithAggregatesInput[]
    NOT?: TrafficSourceBmToApiAccessScalarWhereWithAggregatesInput | TrafficSourceBmToApiAccessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrafficSourceBmToApiAccess"> | number
    createDate?: DateTimeWithAggregatesFilter<"TrafficSourceBmToApiAccess"> | Date | string
    updateDate?: DateTimeWithAggregatesFilter<"TrafficSourceBmToApiAccess"> | Date | string
    trafficSourceBmId?: IntWithAggregatesFilter<"TrafficSourceBmToApiAccess"> | number
    apiAccessId?: IntWithAggregatesFilter<"TrafficSourceBmToApiAccess"> | number
  }

  export type TrafficSourceDailyAdStatWhereInput = {
    AND?: TrafficSourceDailyAdStatWhereInput | TrafficSourceDailyAdStatWhereInput[]
    OR?: TrafficSourceDailyAdStatWhereInput[]
    NOT?: TrafficSourceDailyAdStatWhereInput | TrafficSourceDailyAdStatWhereInput[]
    id?: IntFilter<"TrafficSourceDailyAdStat"> | number
    createDate?: DateTimeFilter<"TrafficSourceDailyAdStat"> | Date | string
    updateDate?: DateTimeFilter<"TrafficSourceDailyAdStat"> | Date | string
    spend?: DecimalFilter<"TrafficSourceDailyAdStat"> | Decimal | DecimalJsLike | number | string
    clicks?: IntFilter<"TrafficSourceDailyAdStat"> | number
    externalAdId?: StringFilter<"TrafficSourceDailyAdStat"> | string
    externalAdSetId?: StringFilter<"TrafficSourceDailyAdStat"> | string
    externalCampaignId?: StringFilter<"TrafficSourceDailyAdStat"> | string
    impressions?: IntFilter<"TrafficSourceDailyAdStat"> | number
    externalDateStart?: DateTimeFilter<"TrafficSourceDailyAdStat"> | Date | string
    externalDateStop?: DateTimeFilter<"TrafficSourceDailyAdStat"> | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFilter<"TrafficSourceDailyAdStat"> | $Enums.TrafficSourceType
    trafficSourceAccountId?: IntFilter<"TrafficSourceDailyAdStat"> | number
    trafficSourceAccount?: XOR<TrafficSourceAccountScalarRelationFilter, TrafficSourceAccountWhereInput>
  }

  export type TrafficSourceDailyAdStatOrderByWithRelationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    spend?: SortOrder
    clicks?: SortOrder
    externalAdId?: SortOrder
    externalAdSetId?: SortOrder
    externalCampaignId?: SortOrder
    impressions?: SortOrder
    externalDateStart?: SortOrder
    externalDateStop?: SortOrder
    trafficSourceType?: SortOrder
    trafficSourceAccountId?: SortOrder
    trafficSourceAccount?: TrafficSourceAccountOrderByWithRelationInput
  }

  export type TrafficSourceDailyAdStatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    externalDateStart_trafficSourceAccountId_externalAdId?: TrafficSourceDailyAdStatExternalDateStartTrafficSourceAccountIdExternalAdIdCompoundUniqueInput
    AND?: TrafficSourceDailyAdStatWhereInput | TrafficSourceDailyAdStatWhereInput[]
    OR?: TrafficSourceDailyAdStatWhereInput[]
    NOT?: TrafficSourceDailyAdStatWhereInput | TrafficSourceDailyAdStatWhereInput[]
    createDate?: DateTimeFilter<"TrafficSourceDailyAdStat"> | Date | string
    updateDate?: DateTimeFilter<"TrafficSourceDailyAdStat"> | Date | string
    spend?: DecimalFilter<"TrafficSourceDailyAdStat"> | Decimal | DecimalJsLike | number | string
    clicks?: IntFilter<"TrafficSourceDailyAdStat"> | number
    externalAdId?: StringFilter<"TrafficSourceDailyAdStat"> | string
    externalAdSetId?: StringFilter<"TrafficSourceDailyAdStat"> | string
    externalCampaignId?: StringFilter<"TrafficSourceDailyAdStat"> | string
    impressions?: IntFilter<"TrafficSourceDailyAdStat"> | number
    externalDateStart?: DateTimeFilter<"TrafficSourceDailyAdStat"> | Date | string
    externalDateStop?: DateTimeFilter<"TrafficSourceDailyAdStat"> | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFilter<"TrafficSourceDailyAdStat"> | $Enums.TrafficSourceType
    trafficSourceAccountId?: IntFilter<"TrafficSourceDailyAdStat"> | number
    trafficSourceAccount?: XOR<TrafficSourceAccountScalarRelationFilter, TrafficSourceAccountWhereInput>
  }, "id" | "externalDateStart_trafficSourceAccountId_externalAdId">

  export type TrafficSourceDailyAdStatOrderByWithAggregationInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    spend?: SortOrder
    clicks?: SortOrder
    externalAdId?: SortOrder
    externalAdSetId?: SortOrder
    externalCampaignId?: SortOrder
    impressions?: SortOrder
    externalDateStart?: SortOrder
    externalDateStop?: SortOrder
    trafficSourceType?: SortOrder
    trafficSourceAccountId?: SortOrder
    _count?: TrafficSourceDailyAdStatCountOrderByAggregateInput
    _avg?: TrafficSourceDailyAdStatAvgOrderByAggregateInput
    _max?: TrafficSourceDailyAdStatMaxOrderByAggregateInput
    _min?: TrafficSourceDailyAdStatMinOrderByAggregateInput
    _sum?: TrafficSourceDailyAdStatSumOrderByAggregateInput
  }

  export type TrafficSourceDailyAdStatScalarWhereWithAggregatesInput = {
    AND?: TrafficSourceDailyAdStatScalarWhereWithAggregatesInput | TrafficSourceDailyAdStatScalarWhereWithAggregatesInput[]
    OR?: TrafficSourceDailyAdStatScalarWhereWithAggregatesInput[]
    NOT?: TrafficSourceDailyAdStatScalarWhereWithAggregatesInput | TrafficSourceDailyAdStatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrafficSourceDailyAdStat"> | number
    createDate?: DateTimeWithAggregatesFilter<"TrafficSourceDailyAdStat"> | Date | string
    updateDate?: DateTimeWithAggregatesFilter<"TrafficSourceDailyAdStat"> | Date | string
    spend?: DecimalWithAggregatesFilter<"TrafficSourceDailyAdStat"> | Decimal | DecimalJsLike | number | string
    clicks?: IntWithAggregatesFilter<"TrafficSourceDailyAdStat"> | number
    externalAdId?: StringWithAggregatesFilter<"TrafficSourceDailyAdStat"> | string
    externalAdSetId?: StringWithAggregatesFilter<"TrafficSourceDailyAdStat"> | string
    externalCampaignId?: StringWithAggregatesFilter<"TrafficSourceDailyAdStat"> | string
    impressions?: IntWithAggregatesFilter<"TrafficSourceDailyAdStat"> | number
    externalDateStart?: DateTimeWithAggregatesFilter<"TrafficSourceDailyAdStat"> | Date | string
    externalDateStop?: DateTimeWithAggregatesFilter<"TrafficSourceDailyAdStat"> | Date | string
    trafficSourceType?: EnumTrafficSourceTypeWithAggregatesFilter<"TrafficSourceDailyAdStat"> | $Enums.TrafficSourceType
    trafficSourceAccountId?: IntWithAggregatesFilter<"TrafficSourceDailyAdStat"> | number
  }

  export type ApiAccessCreateInput = {
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType?: $Enums.TrafficSourceType | null
    apiAccessType: $Enums.ApiAccessType
    isActive: boolean
    name: string
    login?: string | null
    password?: string | null
    firstAccessToken?: string | null
    secondAccessToken?: string | null
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessCreateNestedManyWithoutApiAccessInput
  }

  export type ApiAccessUncheckedCreateInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType?: $Enums.TrafficSourceType | null
    apiAccessType: $Enums.ApiAccessType
    isActive: boolean
    name: string
    login?: string | null
    password?: string | null
    firstAccessToken?: string | null
    secondAccessToken?: string | null
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessUncheckedCreateNestedManyWithoutApiAccessInput
  }

  export type ApiAccessUpdateInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: NullableEnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType | null
    apiAccessType?: EnumApiAccessTypeFieldUpdateOperationsInput | $Enums.ApiAccessType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    secondAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessUpdateManyWithoutApiAccessNestedInput
  }

  export type ApiAccessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: NullableEnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType | null
    apiAccessType?: EnumApiAccessTypeFieldUpdateOperationsInput | $Enums.ApiAccessType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    secondAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessUncheckedUpdateManyWithoutApiAccessNestedInput
  }

  export type ApiAccessCreateManyInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType?: $Enums.TrafficSourceType | null
    apiAccessType: $Enums.ApiAccessType
    isActive: boolean
    name: string
    login?: string | null
    password?: string | null
    firstAccessToken?: string | null
    secondAccessToken?: string | null
  }

  export type ApiAccessUpdateManyMutationInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: NullableEnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType | null
    apiAccessType?: EnumApiAccessTypeFieldUpdateOperationsInput | $Enums.ApiAccessType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    secondAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiAccessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: NullableEnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType | null
    apiAccessType?: EnumApiAccessTypeFieldUpdateOperationsInput | $Enums.ApiAccessType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    secondAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogCreateInput = {
    createDate?: Date | string
    name?: string | null
    message?: string | null
    isError: boolean
    workerId?: number | null
    stack?: string | null
    request?: string | null
    response?: string | null
    data?: string | null
  }

  export type LogUncheckedCreateInput = {
    id?: number
    createDate?: Date | string
    name?: string | null
    message?: string | null
    isError: boolean
    workerId?: number | null
    stack?: string | null
    request?: string | null
    response?: string | null
    data?: string | null
  }

  export type LogUpdateInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isError?: BoolFieldUpdateOperationsInput | boolean
    workerId?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    request?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isError?: BoolFieldUpdateOperationsInput | boolean
    workerId?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    request?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogCreateManyInput = {
    id?: number
    createDate?: Date | string
    name?: string | null
    message?: string | null
    isError: boolean
    workerId?: number | null
    stack?: string | null
    request?: string | null
    response?: string | null
    data?: string | null
  }

  export type LogUpdateManyMutationInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isError?: BoolFieldUpdateOperationsInput | boolean
    workerId?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    request?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isError?: BoolFieldUpdateOperationsInput | boolean
    workerId?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    request?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsCreateInput = {
    createDate?: Date | string
    updateDate?: Date | string
    isActive: boolean
    name: string
    minWorkerThreads: number
    maxWorkerThreads: number
  }

  export type SettingsUncheckedCreateInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    isActive: boolean
    name: string
    minWorkerThreads: number
    maxWorkerThreads: number
  }

  export type SettingsUpdateInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    minWorkerThreads?: IntFieldUpdateOperationsInput | number
    maxWorkerThreads?: IntFieldUpdateOperationsInput | number
  }

  export type SettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    minWorkerThreads?: IntFieldUpdateOperationsInput | number
    maxWorkerThreads?: IntFieldUpdateOperationsInput | number
  }

  export type SettingsCreateManyInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    isActive: boolean
    name: string
    minWorkerThreads: number
    maxWorkerThreads: number
  }

  export type SettingsUpdateManyMutationInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    minWorkerThreads?: IntFieldUpdateOperationsInput | number
    maxWorkerThreads?: IntFieldUpdateOperationsInput | number
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    minWorkerThreads?: IntFieldUpdateOperationsInput | number
    maxWorkerThreads?: IntFieldUpdateOperationsInput | number
  }

  export type TaskLoopCreateInput = {
    createDate?: Date | string
    updateDate?: Date | string
    type: $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    intervalMin: number
    isActive: boolean
    tasks?: TaskCreateNestedManyWithoutTaskLoopInput
  }

  export type TaskLoopUncheckedCreateInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    type: $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    intervalMin: number
    isActive: boolean
    tasks?: TaskUncheckedCreateNestedManyWithoutTaskLoopInput
  }

  export type TaskLoopUpdateInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    intervalMin?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tasks?: TaskUpdateManyWithoutTaskLoopNestedInput
  }

  export type TaskLoopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    intervalMin?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tasks?: TaskUncheckedUpdateManyWithoutTaskLoopNestedInput
  }

  export type TaskLoopCreateManyInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    type: $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    intervalMin: number
    isActive: boolean
  }

  export type TaskLoopUpdateManyMutationInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    intervalMin?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskLoopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    intervalMin?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskCreateInput = {
    createDate?: Date | string
    updateDate?: Date | string
    type: $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.TaskStatus
    result?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startTime?: Date | string | null
    endTime?: Date | string | null
    taskLoop?: TaskLoopCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    type: $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.TaskStatus
    result?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startTime?: Date | string | null
    endTime?: Date | string | null
    taskLoopId?: number | null
  }

  export type TaskUpdateInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    result?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taskLoop?: TaskLoopUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    result?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taskLoopId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaskCreateManyInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    type: $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.TaskStatus
    result?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startTime?: Date | string | null
    endTime?: Date | string | null
    taskLoopId?: number | null
  }

  export type TaskUpdateManyMutationInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    result?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    result?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taskLoopId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrafficSourceAccountCreateInput = {
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    externalStatus: string
    externalCreatedTime: Date | string
    status?: $Enums.TrafficSourceAccountStatus | null
    balance: Decimal | DecimalJsLike | number | string
    externalCurrency: string
    externalTimezone: string
    spendCap: Decimal | DecimalJsLike | number | string
    amountSpent: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    trafficSourceOwnerBm?: TrafficSourceBmCreateNestedOneWithoutAccountsOwnedInput
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmCreateNestedManyWithoutTrafficSourceAccountInput
    trafficSourceDailyAdStats?: TrafficSourceDailyAdStatCreateNestedManyWithoutTrafficSourceAccountInput
  }

  export type TrafficSourceAccountUncheckedCreateInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    externalStatus: string
    externalCreatedTime: Date | string
    status?: $Enums.TrafficSourceAccountStatus | null
    balance: Decimal | DecimalJsLike | number | string
    externalCurrency: string
    externalTimezone: string
    spendCap: Decimal | DecimalJsLike | number | string
    amountSpent: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    trafficSourceOwnerBmId?: number | null
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUncheckedCreateNestedManyWithoutTrafficSourceAccountInput
    trafficSourceDailyAdStats?: TrafficSourceDailyAdStatUncheckedCreateNestedManyWithoutTrafficSourceAccountInput
  }

  export type TrafficSourceAccountUpdateInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalStatus?: StringFieldUpdateOperationsInput | string
    externalCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableEnumTrafficSourceAccountStatusFieldUpdateOperationsInput | $Enums.TrafficSourceAccountStatus | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalCurrency?: StringFieldUpdateOperationsInput | string
    externalTimezone?: StringFieldUpdateOperationsInput | string
    spendCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceOwnerBm?: TrafficSourceBmUpdateOneWithoutAccountsOwnedNestedInput
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUpdateManyWithoutTrafficSourceAccountNestedInput
    trafficSourceDailyAdStats?: TrafficSourceDailyAdStatUpdateManyWithoutTrafficSourceAccountNestedInput
  }

  export type TrafficSourceAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalStatus?: StringFieldUpdateOperationsInput | string
    externalCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableEnumTrafficSourceAccountStatusFieldUpdateOperationsInput | $Enums.TrafficSourceAccountStatus | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalCurrency?: StringFieldUpdateOperationsInput | string
    externalTimezone?: StringFieldUpdateOperationsInput | string
    spendCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceOwnerBmId?: NullableIntFieldUpdateOperationsInput | number | null
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUncheckedUpdateManyWithoutTrafficSourceAccountNestedInput
    trafficSourceDailyAdStats?: TrafficSourceDailyAdStatUncheckedUpdateManyWithoutTrafficSourceAccountNestedInput
  }

  export type TrafficSourceAccountCreateManyInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    externalStatus: string
    externalCreatedTime: Date | string
    status?: $Enums.TrafficSourceAccountStatus | null
    balance: Decimal | DecimalJsLike | number | string
    externalCurrency: string
    externalTimezone: string
    spendCap: Decimal | DecimalJsLike | number | string
    amountSpent: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    trafficSourceOwnerBmId?: number | null
  }

  export type TrafficSourceAccountUpdateManyMutationInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalStatus?: StringFieldUpdateOperationsInput | string
    externalCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableEnumTrafficSourceAccountStatusFieldUpdateOperationsInput | $Enums.TrafficSourceAccountStatus | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalCurrency?: StringFieldUpdateOperationsInput | string
    externalTimezone?: StringFieldUpdateOperationsInput | string
    spendCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrafficSourceAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalStatus?: StringFieldUpdateOperationsInput | string
    externalCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableEnumTrafficSourceAccountStatusFieldUpdateOperationsInput | $Enums.TrafficSourceAccountStatus | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalCurrency?: StringFieldUpdateOperationsInput | string
    externalTimezone?: StringFieldUpdateOperationsInput | string
    spendCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceOwnerBmId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrafficSourceAccountToTrafficSourceBmCreateInput = {
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceBm: TrafficSourceBmCreateNestedOneWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput
    trafficSourceAccount: TrafficSourceAccountCreateNestedOneWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput
  }

  export type TrafficSourceAccountToTrafficSourceBmUncheckedCreateInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceBmId: number
    trafficSourceAccountId: number
  }

  export type TrafficSourceAccountToTrafficSourceBmUpdateInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceBm?: TrafficSourceBmUpdateOneRequiredWithoutTrafficSourceAccountToTrafficSourceBmConnectionsNestedInput
    trafficSourceAccount?: TrafficSourceAccountUpdateOneRequiredWithoutTrafficSourceAccountToTrafficSourceBmConnectionsNestedInput
  }

  export type TrafficSourceAccountToTrafficSourceBmUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceBmId?: IntFieldUpdateOperationsInput | number
    trafficSourceAccountId?: IntFieldUpdateOperationsInput | number
  }

  export type TrafficSourceAccountToTrafficSourceBmCreateManyInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceBmId: number
    trafficSourceAccountId: number
  }

  export type TrafficSourceAccountToTrafficSourceBmUpdateManyMutationInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrafficSourceAccountToTrafficSourceBmUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceBmId?: IntFieldUpdateOperationsInput | number
    trafficSourceAccountId?: IntFieldUpdateOperationsInput | number
  }

  export type TrafficSourceBmCreateInput = {
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    isActive?: boolean
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessCreateNestedManyWithoutTrafficSourceBmInput
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmCreateNestedManyWithoutTrafficSourceBmInput
    accountsOwned?: TrafficSourceAccountCreateNestedManyWithoutTrafficSourceOwnerBmInput
  }

  export type TrafficSourceBmUncheckedCreateInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    isActive?: boolean
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessUncheckedCreateNestedManyWithoutTrafficSourceBmInput
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUncheckedCreateNestedManyWithoutTrafficSourceBmInput
    accountsOwned?: TrafficSourceAccountUncheckedCreateNestedManyWithoutTrafficSourceOwnerBmInput
  }

  export type TrafficSourceBmUpdateInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessUpdateManyWithoutTrafficSourceBmNestedInput
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUpdateManyWithoutTrafficSourceBmNestedInput
    accountsOwned?: TrafficSourceAccountUpdateManyWithoutTrafficSourceOwnerBmNestedInput
  }

  export type TrafficSourceBmUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessUncheckedUpdateManyWithoutTrafficSourceBmNestedInput
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUncheckedUpdateManyWithoutTrafficSourceBmNestedInput
    accountsOwned?: TrafficSourceAccountUncheckedUpdateManyWithoutTrafficSourceOwnerBmNestedInput
  }

  export type TrafficSourceBmCreateManyInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    isActive?: boolean
  }

  export type TrafficSourceBmUpdateManyMutationInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrafficSourceBmUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrafficSourceBmToApiAccessCreateInput = {
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceBm: TrafficSourceBmCreateNestedOneWithoutTrafficSourceBmToApiAccessConnectionsInput
    apiAccess: ApiAccessCreateNestedOneWithoutTrafficSourceBmToApiAccessConnectionsInput
  }

  export type TrafficSourceBmToApiAccessUncheckedCreateInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceBmId: number
    apiAccessId: number
  }

  export type TrafficSourceBmToApiAccessUpdateInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceBm?: TrafficSourceBmUpdateOneRequiredWithoutTrafficSourceBmToApiAccessConnectionsNestedInput
    apiAccess?: ApiAccessUpdateOneRequiredWithoutTrafficSourceBmToApiAccessConnectionsNestedInput
  }

  export type TrafficSourceBmToApiAccessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceBmId?: IntFieldUpdateOperationsInput | number
    apiAccessId?: IntFieldUpdateOperationsInput | number
  }

  export type TrafficSourceBmToApiAccessCreateManyInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceBmId: number
    apiAccessId: number
  }

  export type TrafficSourceBmToApiAccessUpdateManyMutationInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrafficSourceBmToApiAccessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceBmId?: IntFieldUpdateOperationsInput | number
    apiAccessId?: IntFieldUpdateOperationsInput | number
  }

  export type TrafficSourceDailyAdStatCreateInput = {
    createDate?: Date | string
    updateDate?: Date | string
    spend: Decimal | DecimalJsLike | number | string
    clicks: number
    externalAdId: string
    externalAdSetId: string
    externalCampaignId: string
    impressions: number
    externalDateStart: Date | string
    externalDateStop: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    trafficSourceAccount: TrafficSourceAccountCreateNestedOneWithoutTrafficSourceDailyAdStatsInput
  }

  export type TrafficSourceDailyAdStatUncheckedCreateInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    spend: Decimal | DecimalJsLike | number | string
    clicks: number
    externalAdId: string
    externalAdSetId: string
    externalCampaignId: string
    impressions: number
    externalDateStart: Date | string
    externalDateStop: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    trafficSourceAccountId: number
  }

  export type TrafficSourceDailyAdStatUpdateInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clicks?: IntFieldUpdateOperationsInput | number
    externalAdId?: StringFieldUpdateOperationsInput | string
    externalAdSetId?: StringFieldUpdateOperationsInput | string
    externalCampaignId?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    externalDateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    externalDateStop?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    trafficSourceAccount?: TrafficSourceAccountUpdateOneRequiredWithoutTrafficSourceDailyAdStatsNestedInput
  }

  export type TrafficSourceDailyAdStatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clicks?: IntFieldUpdateOperationsInput | number
    externalAdId?: StringFieldUpdateOperationsInput | string
    externalAdSetId?: StringFieldUpdateOperationsInput | string
    externalCampaignId?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    externalDateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    externalDateStop?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    trafficSourceAccountId?: IntFieldUpdateOperationsInput | number
  }

  export type TrafficSourceDailyAdStatCreateManyInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    spend: Decimal | DecimalJsLike | number | string
    clicks: number
    externalAdId: string
    externalAdSetId: string
    externalCampaignId: string
    impressions: number
    externalDateStart: Date | string
    externalDateStop: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    trafficSourceAccountId: number
  }

  export type TrafficSourceDailyAdStatUpdateManyMutationInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clicks?: IntFieldUpdateOperationsInput | number
    externalAdId?: StringFieldUpdateOperationsInput | string
    externalAdSetId?: StringFieldUpdateOperationsInput | string
    externalCampaignId?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    externalDateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    externalDateStop?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
  }

  export type TrafficSourceDailyAdStatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clicks?: IntFieldUpdateOperationsInput | number
    externalAdId?: StringFieldUpdateOperationsInput | string
    externalAdSetId?: StringFieldUpdateOperationsInput | string
    externalCampaignId?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    externalDateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    externalDateStop?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    trafficSourceAccountId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumTrafficSourceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TrafficSourceType | EnumTrafficSourceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTrafficSourceTypeNullableFilter<$PrismaModel> | $Enums.TrafficSourceType | null
  }

  export type EnumApiAccessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiAccessType | EnumApiAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ApiAccessType[] | ListEnumApiAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiAccessType[] | ListEnumApiAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumApiAccessTypeFilter<$PrismaModel> | $Enums.ApiAccessType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TrafficSourceBmToApiAccessListRelationFilter = {
    every?: TrafficSourceBmToApiAccessWhereInput
    some?: TrafficSourceBmToApiAccessWhereInput
    none?: TrafficSourceBmToApiAccessWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TrafficSourceBmToApiAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiAccessCountOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceType?: SortOrder
    apiAccessType?: SortOrder
    isActive?: SortOrder
    name?: SortOrder
    login?: SortOrder
    password?: SortOrder
    firstAccessToken?: SortOrder
    secondAccessToken?: SortOrder
  }

  export type ApiAccessAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ApiAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceType?: SortOrder
    apiAccessType?: SortOrder
    isActive?: SortOrder
    name?: SortOrder
    login?: SortOrder
    password?: SortOrder
    firstAccessToken?: SortOrder
    secondAccessToken?: SortOrder
  }

  export type ApiAccessMinOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceType?: SortOrder
    apiAccessType?: SortOrder
    isActive?: SortOrder
    name?: SortOrder
    login?: SortOrder
    password?: SortOrder
    firstAccessToken?: SortOrder
    secondAccessToken?: SortOrder
  }

  export type ApiAccessSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTrafficSourceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrafficSourceType | EnumTrafficSourceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTrafficSourceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TrafficSourceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTrafficSourceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumTrafficSourceTypeNullableFilter<$PrismaModel>
  }

  export type EnumApiAccessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiAccessType | EnumApiAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ApiAccessType[] | ListEnumApiAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiAccessType[] | ListEnumApiAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumApiAccessTypeWithAggregatesFilter<$PrismaModel> | $Enums.ApiAccessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApiAccessTypeFilter<$PrismaModel>
    _max?: NestedEnumApiAccessTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    name?: SortOrder
    message?: SortOrder
    isError?: SortOrder
    workerId?: SortOrder
    stack?: SortOrder
    request?: SortOrder
    response?: SortOrder
    data?: SortOrder
  }

  export type LogAvgOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    name?: SortOrder
    message?: SortOrder
    isError?: SortOrder
    workerId?: SortOrder
    stack?: SortOrder
    request?: SortOrder
    response?: SortOrder
    data?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    name?: SortOrder
    message?: SortOrder
    isError?: SortOrder
    workerId?: SortOrder
    stack?: SortOrder
    request?: SortOrder
    response?: SortOrder
    data?: SortOrder
  }

  export type LogSumOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    isActive?: SortOrder
    name?: SortOrder
    minWorkerThreads?: SortOrder
    maxWorkerThreads?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    id?: SortOrder
    minWorkerThreads?: SortOrder
    maxWorkerThreads?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    isActive?: SortOrder
    name?: SortOrder
    minWorkerThreads?: SortOrder
    maxWorkerThreads?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    isActive?: SortOrder
    name?: SortOrder
    minWorkerThreads?: SortOrder
    maxWorkerThreads?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    id?: SortOrder
    minWorkerThreads?: SortOrder
    maxWorkerThreads?: SortOrder
  }

  export type EnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskLoopCountOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    intervalMin?: SortOrder
    isActive?: SortOrder
  }

  export type TaskLoopAvgOrderByAggregateInput = {
    id?: SortOrder
    intervalMin?: SortOrder
  }

  export type TaskLoopMaxOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    type?: SortOrder
    intervalMin?: SortOrder
    isActive?: SortOrder
  }

  export type TaskLoopMinOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    type?: SortOrder
    intervalMin?: SortOrder
    isActive?: SortOrder
  }

  export type TaskLoopSumOrderByAggregateInput = {
    id?: SortOrder
    intervalMin?: SortOrder
  }

  export type EnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TaskLoopNullableScalarRelationFilter = {
    is?: TaskLoopWhereInput | null
    isNot?: TaskLoopWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    result?: SortOrder
    error?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    taskLoopId?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    taskLoopId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    type?: SortOrder
    status?: SortOrder
    error?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    taskLoopId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    type?: SortOrder
    status?: SortOrder
    error?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    taskLoopId?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    taskLoopId?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTrafficSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TrafficSourceType | EnumTrafficSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrafficSourceTypeFilter<$PrismaModel> | $Enums.TrafficSourceType
  }

  export type EnumTrafficSourceAccountStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TrafficSourceAccountStatus | EnumTrafficSourceAccountStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TrafficSourceAccountStatus[] | ListEnumTrafficSourceAccountStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TrafficSourceAccountStatus[] | ListEnumTrafficSourceAccountStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTrafficSourceAccountStatusNullableFilter<$PrismaModel> | $Enums.TrafficSourceAccountStatus | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type TrafficSourceBmNullableScalarRelationFilter = {
    is?: TrafficSourceBmWhereInput | null
    isNot?: TrafficSourceBmWhereInput | null
  }

  export type TrafficSourceAccountToTrafficSourceBmListRelationFilter = {
    every?: TrafficSourceAccountToTrafficSourceBmWhereInput
    some?: TrafficSourceAccountToTrafficSourceBmWhereInput
    none?: TrafficSourceAccountToTrafficSourceBmWhereInput
  }

  export type TrafficSourceDailyAdStatListRelationFilter = {
    every?: TrafficSourceDailyAdStatWhereInput
    some?: TrafficSourceDailyAdStatWhereInput
    none?: TrafficSourceDailyAdStatWhereInput
  }

  export type TrafficSourceAccountToTrafficSourceBmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrafficSourceDailyAdStatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrafficSourceAccountTrafficSourceTypeExternalIdCompoundUniqueInput = {
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
  }

  export type TrafficSourceAccountCountOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceType?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    externalStatus?: SortOrder
    externalCreatedTime?: SortOrder
    status?: SortOrder
    balance?: SortOrder
    externalCurrency?: SortOrder
    externalTimezone?: SortOrder
    spendCap?: SortOrder
    amountSpent?: SortOrder
    isActive?: SortOrder
    trafficSourceOwnerBmId?: SortOrder
  }

  export type TrafficSourceAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    spendCap?: SortOrder
    amountSpent?: SortOrder
    trafficSourceOwnerBmId?: SortOrder
  }

  export type TrafficSourceAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceType?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    externalStatus?: SortOrder
    externalCreatedTime?: SortOrder
    status?: SortOrder
    balance?: SortOrder
    externalCurrency?: SortOrder
    externalTimezone?: SortOrder
    spendCap?: SortOrder
    amountSpent?: SortOrder
    isActive?: SortOrder
    trafficSourceOwnerBmId?: SortOrder
  }

  export type TrafficSourceAccountMinOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceType?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    externalStatus?: SortOrder
    externalCreatedTime?: SortOrder
    status?: SortOrder
    balance?: SortOrder
    externalCurrency?: SortOrder
    externalTimezone?: SortOrder
    spendCap?: SortOrder
    amountSpent?: SortOrder
    isActive?: SortOrder
    trafficSourceOwnerBmId?: SortOrder
  }

  export type TrafficSourceAccountSumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    spendCap?: SortOrder
    amountSpent?: SortOrder
    trafficSourceOwnerBmId?: SortOrder
  }

  export type EnumTrafficSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrafficSourceType | EnumTrafficSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrafficSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.TrafficSourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrafficSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumTrafficSourceTypeFilter<$PrismaModel>
  }

  export type EnumTrafficSourceAccountStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrafficSourceAccountStatus | EnumTrafficSourceAccountStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TrafficSourceAccountStatus[] | ListEnumTrafficSourceAccountStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TrafficSourceAccountStatus[] | ListEnumTrafficSourceAccountStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTrafficSourceAccountStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TrafficSourceAccountStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTrafficSourceAccountStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumTrafficSourceAccountStatusNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type TrafficSourceBmScalarRelationFilter = {
    is?: TrafficSourceBmWhereInput
    isNot?: TrafficSourceBmWhereInput
  }

  export type TrafficSourceAccountScalarRelationFilter = {
    is?: TrafficSourceAccountWhereInput
    isNot?: TrafficSourceAccountWhereInput
  }

  export type TrafficSourceAccountToTrafficSourceBmTrafficSourceBmIdTrafficSourceAccountIdCompoundUniqueInput = {
    trafficSourceBmId: number
    trafficSourceAccountId: number
  }

  export type TrafficSourceAccountToTrafficSourceBmCountOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceBmId?: SortOrder
    trafficSourceAccountId?: SortOrder
  }

  export type TrafficSourceAccountToTrafficSourceBmAvgOrderByAggregateInput = {
    id?: SortOrder
    trafficSourceBmId?: SortOrder
    trafficSourceAccountId?: SortOrder
  }

  export type TrafficSourceAccountToTrafficSourceBmMaxOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceBmId?: SortOrder
    trafficSourceAccountId?: SortOrder
  }

  export type TrafficSourceAccountToTrafficSourceBmMinOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceBmId?: SortOrder
    trafficSourceAccountId?: SortOrder
  }

  export type TrafficSourceAccountToTrafficSourceBmSumOrderByAggregateInput = {
    id?: SortOrder
    trafficSourceBmId?: SortOrder
    trafficSourceAccountId?: SortOrder
  }

  export type TrafficSourceAccountListRelationFilter = {
    every?: TrafficSourceAccountWhereInput
    some?: TrafficSourceAccountWhereInput
    none?: TrafficSourceAccountWhereInput
  }

  export type TrafficSourceAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrafficSourceBmTrafficSourceTypeExternalIdCompoundUniqueInput = {
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
  }

  export type TrafficSourceBmCountOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceType?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type TrafficSourceBmAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TrafficSourceBmMaxOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceType?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type TrafficSourceBmMinOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceType?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type TrafficSourceBmSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ApiAccessScalarRelationFilter = {
    is?: ApiAccessWhereInput
    isNot?: ApiAccessWhereInput
  }

  export type TrafficSourceBmToApiAccessTrafficSourceBmIdApiAccessIdCompoundUniqueInput = {
    trafficSourceBmId: number
    apiAccessId: number
  }

  export type TrafficSourceBmToApiAccessCountOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceBmId?: SortOrder
    apiAccessId?: SortOrder
  }

  export type TrafficSourceBmToApiAccessAvgOrderByAggregateInput = {
    id?: SortOrder
    trafficSourceBmId?: SortOrder
    apiAccessId?: SortOrder
  }

  export type TrafficSourceBmToApiAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceBmId?: SortOrder
    apiAccessId?: SortOrder
  }

  export type TrafficSourceBmToApiAccessMinOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    trafficSourceBmId?: SortOrder
    apiAccessId?: SortOrder
  }

  export type TrafficSourceBmToApiAccessSumOrderByAggregateInput = {
    id?: SortOrder
    trafficSourceBmId?: SortOrder
    apiAccessId?: SortOrder
  }

  export type TrafficSourceDailyAdStatExternalDateStartTrafficSourceAccountIdExternalAdIdCompoundUniqueInput = {
    externalDateStart: Date | string
    trafficSourceAccountId: number
    externalAdId: string
  }

  export type TrafficSourceDailyAdStatCountOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    spend?: SortOrder
    clicks?: SortOrder
    externalAdId?: SortOrder
    externalAdSetId?: SortOrder
    externalCampaignId?: SortOrder
    impressions?: SortOrder
    externalDateStart?: SortOrder
    externalDateStop?: SortOrder
    trafficSourceType?: SortOrder
    trafficSourceAccountId?: SortOrder
  }

  export type TrafficSourceDailyAdStatAvgOrderByAggregateInput = {
    id?: SortOrder
    spend?: SortOrder
    clicks?: SortOrder
    impressions?: SortOrder
    trafficSourceAccountId?: SortOrder
  }

  export type TrafficSourceDailyAdStatMaxOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    spend?: SortOrder
    clicks?: SortOrder
    externalAdId?: SortOrder
    externalAdSetId?: SortOrder
    externalCampaignId?: SortOrder
    impressions?: SortOrder
    externalDateStart?: SortOrder
    externalDateStop?: SortOrder
    trafficSourceType?: SortOrder
    trafficSourceAccountId?: SortOrder
  }

  export type TrafficSourceDailyAdStatMinOrderByAggregateInput = {
    id?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    spend?: SortOrder
    clicks?: SortOrder
    externalAdId?: SortOrder
    externalAdSetId?: SortOrder
    externalCampaignId?: SortOrder
    impressions?: SortOrder
    externalDateStart?: SortOrder
    externalDateStop?: SortOrder
    trafficSourceType?: SortOrder
    trafficSourceAccountId?: SortOrder
  }

  export type TrafficSourceDailyAdStatSumOrderByAggregateInput = {
    id?: SortOrder
    spend?: SortOrder
    clicks?: SortOrder
    impressions?: SortOrder
    trafficSourceAccountId?: SortOrder
  }

  export type TrafficSourceBmToApiAccessCreateNestedManyWithoutApiAccessInput = {
    create?: XOR<TrafficSourceBmToApiAccessCreateWithoutApiAccessInput, TrafficSourceBmToApiAccessUncheckedCreateWithoutApiAccessInput> | TrafficSourceBmToApiAccessCreateWithoutApiAccessInput[] | TrafficSourceBmToApiAccessUncheckedCreateWithoutApiAccessInput[]
    connectOrCreate?: TrafficSourceBmToApiAccessCreateOrConnectWithoutApiAccessInput | TrafficSourceBmToApiAccessCreateOrConnectWithoutApiAccessInput[]
    createMany?: TrafficSourceBmToApiAccessCreateManyApiAccessInputEnvelope
    connect?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
  }

  export type TrafficSourceBmToApiAccessUncheckedCreateNestedManyWithoutApiAccessInput = {
    create?: XOR<TrafficSourceBmToApiAccessCreateWithoutApiAccessInput, TrafficSourceBmToApiAccessUncheckedCreateWithoutApiAccessInput> | TrafficSourceBmToApiAccessCreateWithoutApiAccessInput[] | TrafficSourceBmToApiAccessUncheckedCreateWithoutApiAccessInput[]
    connectOrCreate?: TrafficSourceBmToApiAccessCreateOrConnectWithoutApiAccessInput | TrafficSourceBmToApiAccessCreateOrConnectWithoutApiAccessInput[]
    createMany?: TrafficSourceBmToApiAccessCreateManyApiAccessInputEnvelope
    connect?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumTrafficSourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.TrafficSourceType | null
  }

  export type EnumApiAccessTypeFieldUpdateOperationsInput = {
    set?: $Enums.ApiAccessType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TrafficSourceBmToApiAccessUpdateManyWithoutApiAccessNestedInput = {
    create?: XOR<TrafficSourceBmToApiAccessCreateWithoutApiAccessInput, TrafficSourceBmToApiAccessUncheckedCreateWithoutApiAccessInput> | TrafficSourceBmToApiAccessCreateWithoutApiAccessInput[] | TrafficSourceBmToApiAccessUncheckedCreateWithoutApiAccessInput[]
    connectOrCreate?: TrafficSourceBmToApiAccessCreateOrConnectWithoutApiAccessInput | TrafficSourceBmToApiAccessCreateOrConnectWithoutApiAccessInput[]
    upsert?: TrafficSourceBmToApiAccessUpsertWithWhereUniqueWithoutApiAccessInput | TrafficSourceBmToApiAccessUpsertWithWhereUniqueWithoutApiAccessInput[]
    createMany?: TrafficSourceBmToApiAccessCreateManyApiAccessInputEnvelope
    set?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    disconnect?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    delete?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    connect?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    update?: TrafficSourceBmToApiAccessUpdateWithWhereUniqueWithoutApiAccessInput | TrafficSourceBmToApiAccessUpdateWithWhereUniqueWithoutApiAccessInput[]
    updateMany?: TrafficSourceBmToApiAccessUpdateManyWithWhereWithoutApiAccessInput | TrafficSourceBmToApiAccessUpdateManyWithWhereWithoutApiAccessInput[]
    deleteMany?: TrafficSourceBmToApiAccessScalarWhereInput | TrafficSourceBmToApiAccessScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrafficSourceBmToApiAccessUncheckedUpdateManyWithoutApiAccessNestedInput = {
    create?: XOR<TrafficSourceBmToApiAccessCreateWithoutApiAccessInput, TrafficSourceBmToApiAccessUncheckedCreateWithoutApiAccessInput> | TrafficSourceBmToApiAccessCreateWithoutApiAccessInput[] | TrafficSourceBmToApiAccessUncheckedCreateWithoutApiAccessInput[]
    connectOrCreate?: TrafficSourceBmToApiAccessCreateOrConnectWithoutApiAccessInput | TrafficSourceBmToApiAccessCreateOrConnectWithoutApiAccessInput[]
    upsert?: TrafficSourceBmToApiAccessUpsertWithWhereUniqueWithoutApiAccessInput | TrafficSourceBmToApiAccessUpsertWithWhereUniqueWithoutApiAccessInput[]
    createMany?: TrafficSourceBmToApiAccessCreateManyApiAccessInputEnvelope
    set?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    disconnect?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    delete?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    connect?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    update?: TrafficSourceBmToApiAccessUpdateWithWhereUniqueWithoutApiAccessInput | TrafficSourceBmToApiAccessUpdateWithWhereUniqueWithoutApiAccessInput[]
    updateMany?: TrafficSourceBmToApiAccessUpdateManyWithWhereWithoutApiAccessInput | TrafficSourceBmToApiAccessUpdateManyWithWhereWithoutApiAccessInput[]
    deleteMany?: TrafficSourceBmToApiAccessScalarWhereInput | TrafficSourceBmToApiAccessScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskCreateNestedManyWithoutTaskLoopInput = {
    create?: XOR<TaskCreateWithoutTaskLoopInput, TaskUncheckedCreateWithoutTaskLoopInput> | TaskCreateWithoutTaskLoopInput[] | TaskUncheckedCreateWithoutTaskLoopInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskLoopInput | TaskCreateOrConnectWithoutTaskLoopInput[]
    createMany?: TaskCreateManyTaskLoopInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutTaskLoopInput = {
    create?: XOR<TaskCreateWithoutTaskLoopInput, TaskUncheckedCreateWithoutTaskLoopInput> | TaskCreateWithoutTaskLoopInput[] | TaskUncheckedCreateWithoutTaskLoopInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskLoopInput | TaskCreateOrConnectWithoutTaskLoopInput[]
    createMany?: TaskCreateManyTaskLoopInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumTaskTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaskType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUpdateManyWithoutTaskLoopNestedInput = {
    create?: XOR<TaskCreateWithoutTaskLoopInput, TaskUncheckedCreateWithoutTaskLoopInput> | TaskCreateWithoutTaskLoopInput[] | TaskUncheckedCreateWithoutTaskLoopInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskLoopInput | TaskCreateOrConnectWithoutTaskLoopInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTaskLoopInput | TaskUpsertWithWhereUniqueWithoutTaskLoopInput[]
    createMany?: TaskCreateManyTaskLoopInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTaskLoopInput | TaskUpdateWithWhereUniqueWithoutTaskLoopInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTaskLoopInput | TaskUpdateManyWithWhereWithoutTaskLoopInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutTaskLoopNestedInput = {
    create?: XOR<TaskCreateWithoutTaskLoopInput, TaskUncheckedCreateWithoutTaskLoopInput> | TaskCreateWithoutTaskLoopInput[] | TaskUncheckedCreateWithoutTaskLoopInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskLoopInput | TaskCreateOrConnectWithoutTaskLoopInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTaskLoopInput | TaskUpsertWithWhereUniqueWithoutTaskLoopInput[]
    createMany?: TaskCreateManyTaskLoopInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTaskLoopInput | TaskUpdateWithWhereUniqueWithoutTaskLoopInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTaskLoopInput | TaskUpdateManyWithWhereWithoutTaskLoopInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskLoopCreateNestedOneWithoutTasksInput = {
    create?: XOR<TaskLoopCreateWithoutTasksInput, TaskLoopUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TaskLoopCreateOrConnectWithoutTasksInput
    connect?: TaskLoopWhereUniqueInput
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TaskLoopUpdateOneWithoutTasksNestedInput = {
    create?: XOR<TaskLoopCreateWithoutTasksInput, TaskLoopUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TaskLoopCreateOrConnectWithoutTasksInput
    upsert?: TaskLoopUpsertWithoutTasksInput
    disconnect?: TaskLoopWhereInput | boolean
    delete?: TaskLoopWhereInput | boolean
    connect?: TaskLoopWhereUniqueInput
    update?: XOR<XOR<TaskLoopUpdateToOneWithWhereWithoutTasksInput, TaskLoopUpdateWithoutTasksInput>, TaskLoopUncheckedUpdateWithoutTasksInput>
  }

  export type TrafficSourceBmCreateNestedOneWithoutAccountsOwnedInput = {
    create?: XOR<TrafficSourceBmCreateWithoutAccountsOwnedInput, TrafficSourceBmUncheckedCreateWithoutAccountsOwnedInput>
    connectOrCreate?: TrafficSourceBmCreateOrConnectWithoutAccountsOwnedInput
    connect?: TrafficSourceBmWhereUniqueInput
  }

  export type TrafficSourceAccountToTrafficSourceBmCreateNestedManyWithoutTrafficSourceAccountInput = {
    create?: XOR<TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceAccountInput, TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountInput> | TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceAccountInput[] | TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountInput[]
    connectOrCreate?: TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceAccountInput | TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceAccountInput[]
    createMany?: TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceAccountInputEnvelope
    connect?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
  }

  export type TrafficSourceDailyAdStatCreateNestedManyWithoutTrafficSourceAccountInput = {
    create?: XOR<TrafficSourceDailyAdStatCreateWithoutTrafficSourceAccountInput, TrafficSourceDailyAdStatUncheckedCreateWithoutTrafficSourceAccountInput> | TrafficSourceDailyAdStatCreateWithoutTrafficSourceAccountInput[] | TrafficSourceDailyAdStatUncheckedCreateWithoutTrafficSourceAccountInput[]
    connectOrCreate?: TrafficSourceDailyAdStatCreateOrConnectWithoutTrafficSourceAccountInput | TrafficSourceDailyAdStatCreateOrConnectWithoutTrafficSourceAccountInput[]
    createMany?: TrafficSourceDailyAdStatCreateManyTrafficSourceAccountInputEnvelope
    connect?: TrafficSourceDailyAdStatWhereUniqueInput | TrafficSourceDailyAdStatWhereUniqueInput[]
  }

  export type TrafficSourceAccountToTrafficSourceBmUncheckedCreateNestedManyWithoutTrafficSourceAccountInput = {
    create?: XOR<TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceAccountInput, TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountInput> | TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceAccountInput[] | TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountInput[]
    connectOrCreate?: TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceAccountInput | TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceAccountInput[]
    createMany?: TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceAccountInputEnvelope
    connect?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
  }

  export type TrafficSourceDailyAdStatUncheckedCreateNestedManyWithoutTrafficSourceAccountInput = {
    create?: XOR<TrafficSourceDailyAdStatCreateWithoutTrafficSourceAccountInput, TrafficSourceDailyAdStatUncheckedCreateWithoutTrafficSourceAccountInput> | TrafficSourceDailyAdStatCreateWithoutTrafficSourceAccountInput[] | TrafficSourceDailyAdStatUncheckedCreateWithoutTrafficSourceAccountInput[]
    connectOrCreate?: TrafficSourceDailyAdStatCreateOrConnectWithoutTrafficSourceAccountInput | TrafficSourceDailyAdStatCreateOrConnectWithoutTrafficSourceAccountInput[]
    createMany?: TrafficSourceDailyAdStatCreateManyTrafficSourceAccountInputEnvelope
    connect?: TrafficSourceDailyAdStatWhereUniqueInput | TrafficSourceDailyAdStatWhereUniqueInput[]
  }

  export type EnumTrafficSourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.TrafficSourceType
  }

  export type NullableEnumTrafficSourceAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.TrafficSourceAccountStatus | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type TrafficSourceBmUpdateOneWithoutAccountsOwnedNestedInput = {
    create?: XOR<TrafficSourceBmCreateWithoutAccountsOwnedInput, TrafficSourceBmUncheckedCreateWithoutAccountsOwnedInput>
    connectOrCreate?: TrafficSourceBmCreateOrConnectWithoutAccountsOwnedInput
    upsert?: TrafficSourceBmUpsertWithoutAccountsOwnedInput
    disconnect?: TrafficSourceBmWhereInput | boolean
    delete?: TrafficSourceBmWhereInput | boolean
    connect?: TrafficSourceBmWhereUniqueInput
    update?: XOR<XOR<TrafficSourceBmUpdateToOneWithWhereWithoutAccountsOwnedInput, TrafficSourceBmUpdateWithoutAccountsOwnedInput>, TrafficSourceBmUncheckedUpdateWithoutAccountsOwnedInput>
  }

  export type TrafficSourceAccountToTrafficSourceBmUpdateManyWithoutTrafficSourceAccountNestedInput = {
    create?: XOR<TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceAccountInput, TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountInput> | TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceAccountInput[] | TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountInput[]
    connectOrCreate?: TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceAccountInput | TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceAccountInput[]
    upsert?: TrafficSourceAccountToTrafficSourceBmUpsertWithWhereUniqueWithoutTrafficSourceAccountInput | TrafficSourceAccountToTrafficSourceBmUpsertWithWhereUniqueWithoutTrafficSourceAccountInput[]
    createMany?: TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceAccountInputEnvelope
    set?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    disconnect?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    delete?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    connect?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    update?: TrafficSourceAccountToTrafficSourceBmUpdateWithWhereUniqueWithoutTrafficSourceAccountInput | TrafficSourceAccountToTrafficSourceBmUpdateWithWhereUniqueWithoutTrafficSourceAccountInput[]
    updateMany?: TrafficSourceAccountToTrafficSourceBmUpdateManyWithWhereWithoutTrafficSourceAccountInput | TrafficSourceAccountToTrafficSourceBmUpdateManyWithWhereWithoutTrafficSourceAccountInput[]
    deleteMany?: TrafficSourceAccountToTrafficSourceBmScalarWhereInput | TrafficSourceAccountToTrafficSourceBmScalarWhereInput[]
  }

  export type TrafficSourceDailyAdStatUpdateManyWithoutTrafficSourceAccountNestedInput = {
    create?: XOR<TrafficSourceDailyAdStatCreateWithoutTrafficSourceAccountInput, TrafficSourceDailyAdStatUncheckedCreateWithoutTrafficSourceAccountInput> | TrafficSourceDailyAdStatCreateWithoutTrafficSourceAccountInput[] | TrafficSourceDailyAdStatUncheckedCreateWithoutTrafficSourceAccountInput[]
    connectOrCreate?: TrafficSourceDailyAdStatCreateOrConnectWithoutTrafficSourceAccountInput | TrafficSourceDailyAdStatCreateOrConnectWithoutTrafficSourceAccountInput[]
    upsert?: TrafficSourceDailyAdStatUpsertWithWhereUniqueWithoutTrafficSourceAccountInput | TrafficSourceDailyAdStatUpsertWithWhereUniqueWithoutTrafficSourceAccountInput[]
    createMany?: TrafficSourceDailyAdStatCreateManyTrafficSourceAccountInputEnvelope
    set?: TrafficSourceDailyAdStatWhereUniqueInput | TrafficSourceDailyAdStatWhereUniqueInput[]
    disconnect?: TrafficSourceDailyAdStatWhereUniqueInput | TrafficSourceDailyAdStatWhereUniqueInput[]
    delete?: TrafficSourceDailyAdStatWhereUniqueInput | TrafficSourceDailyAdStatWhereUniqueInput[]
    connect?: TrafficSourceDailyAdStatWhereUniqueInput | TrafficSourceDailyAdStatWhereUniqueInput[]
    update?: TrafficSourceDailyAdStatUpdateWithWhereUniqueWithoutTrafficSourceAccountInput | TrafficSourceDailyAdStatUpdateWithWhereUniqueWithoutTrafficSourceAccountInput[]
    updateMany?: TrafficSourceDailyAdStatUpdateManyWithWhereWithoutTrafficSourceAccountInput | TrafficSourceDailyAdStatUpdateManyWithWhereWithoutTrafficSourceAccountInput[]
    deleteMany?: TrafficSourceDailyAdStatScalarWhereInput | TrafficSourceDailyAdStatScalarWhereInput[]
  }

  export type TrafficSourceAccountToTrafficSourceBmUncheckedUpdateManyWithoutTrafficSourceAccountNestedInput = {
    create?: XOR<TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceAccountInput, TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountInput> | TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceAccountInput[] | TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountInput[]
    connectOrCreate?: TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceAccountInput | TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceAccountInput[]
    upsert?: TrafficSourceAccountToTrafficSourceBmUpsertWithWhereUniqueWithoutTrafficSourceAccountInput | TrafficSourceAccountToTrafficSourceBmUpsertWithWhereUniqueWithoutTrafficSourceAccountInput[]
    createMany?: TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceAccountInputEnvelope
    set?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    disconnect?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    delete?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    connect?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    update?: TrafficSourceAccountToTrafficSourceBmUpdateWithWhereUniqueWithoutTrafficSourceAccountInput | TrafficSourceAccountToTrafficSourceBmUpdateWithWhereUniqueWithoutTrafficSourceAccountInput[]
    updateMany?: TrafficSourceAccountToTrafficSourceBmUpdateManyWithWhereWithoutTrafficSourceAccountInput | TrafficSourceAccountToTrafficSourceBmUpdateManyWithWhereWithoutTrafficSourceAccountInput[]
    deleteMany?: TrafficSourceAccountToTrafficSourceBmScalarWhereInput | TrafficSourceAccountToTrafficSourceBmScalarWhereInput[]
  }

  export type TrafficSourceDailyAdStatUncheckedUpdateManyWithoutTrafficSourceAccountNestedInput = {
    create?: XOR<TrafficSourceDailyAdStatCreateWithoutTrafficSourceAccountInput, TrafficSourceDailyAdStatUncheckedCreateWithoutTrafficSourceAccountInput> | TrafficSourceDailyAdStatCreateWithoutTrafficSourceAccountInput[] | TrafficSourceDailyAdStatUncheckedCreateWithoutTrafficSourceAccountInput[]
    connectOrCreate?: TrafficSourceDailyAdStatCreateOrConnectWithoutTrafficSourceAccountInput | TrafficSourceDailyAdStatCreateOrConnectWithoutTrafficSourceAccountInput[]
    upsert?: TrafficSourceDailyAdStatUpsertWithWhereUniqueWithoutTrafficSourceAccountInput | TrafficSourceDailyAdStatUpsertWithWhereUniqueWithoutTrafficSourceAccountInput[]
    createMany?: TrafficSourceDailyAdStatCreateManyTrafficSourceAccountInputEnvelope
    set?: TrafficSourceDailyAdStatWhereUniqueInput | TrafficSourceDailyAdStatWhereUniqueInput[]
    disconnect?: TrafficSourceDailyAdStatWhereUniqueInput | TrafficSourceDailyAdStatWhereUniqueInput[]
    delete?: TrafficSourceDailyAdStatWhereUniqueInput | TrafficSourceDailyAdStatWhereUniqueInput[]
    connect?: TrafficSourceDailyAdStatWhereUniqueInput | TrafficSourceDailyAdStatWhereUniqueInput[]
    update?: TrafficSourceDailyAdStatUpdateWithWhereUniqueWithoutTrafficSourceAccountInput | TrafficSourceDailyAdStatUpdateWithWhereUniqueWithoutTrafficSourceAccountInput[]
    updateMany?: TrafficSourceDailyAdStatUpdateManyWithWhereWithoutTrafficSourceAccountInput | TrafficSourceDailyAdStatUpdateManyWithWhereWithoutTrafficSourceAccountInput[]
    deleteMany?: TrafficSourceDailyAdStatScalarWhereInput | TrafficSourceDailyAdStatScalarWhereInput[]
  }

  export type TrafficSourceBmCreateNestedOneWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    create?: XOR<TrafficSourceBmCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput, TrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>
    connectOrCreate?: TrafficSourceBmCreateOrConnectWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput
    connect?: TrafficSourceBmWhereUniqueInput
  }

  export type TrafficSourceAccountCreateNestedOneWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    create?: XOR<TrafficSourceAccountCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput, TrafficSourceAccountUncheckedCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>
    connectOrCreate?: TrafficSourceAccountCreateOrConnectWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput
    connect?: TrafficSourceAccountWhereUniqueInput
  }

  export type TrafficSourceBmUpdateOneRequiredWithoutTrafficSourceAccountToTrafficSourceBmConnectionsNestedInput = {
    create?: XOR<TrafficSourceBmCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput, TrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>
    connectOrCreate?: TrafficSourceBmCreateOrConnectWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput
    upsert?: TrafficSourceBmUpsertWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput
    connect?: TrafficSourceBmWhereUniqueInput
    update?: XOR<XOR<TrafficSourceBmUpdateToOneWithWhereWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput, TrafficSourceBmUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>, TrafficSourceBmUncheckedUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>
  }

  export type TrafficSourceAccountUpdateOneRequiredWithoutTrafficSourceAccountToTrafficSourceBmConnectionsNestedInput = {
    create?: XOR<TrafficSourceAccountCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput, TrafficSourceAccountUncheckedCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>
    connectOrCreate?: TrafficSourceAccountCreateOrConnectWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput
    upsert?: TrafficSourceAccountUpsertWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput
    connect?: TrafficSourceAccountWhereUniqueInput
    update?: XOR<XOR<TrafficSourceAccountUpdateToOneWithWhereWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput, TrafficSourceAccountUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>, TrafficSourceAccountUncheckedUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>
  }

  export type TrafficSourceBmToApiAccessCreateNestedManyWithoutTrafficSourceBmInput = {
    create?: XOR<TrafficSourceBmToApiAccessCreateWithoutTrafficSourceBmInput, TrafficSourceBmToApiAccessUncheckedCreateWithoutTrafficSourceBmInput> | TrafficSourceBmToApiAccessCreateWithoutTrafficSourceBmInput[] | TrafficSourceBmToApiAccessUncheckedCreateWithoutTrafficSourceBmInput[]
    connectOrCreate?: TrafficSourceBmToApiAccessCreateOrConnectWithoutTrafficSourceBmInput | TrafficSourceBmToApiAccessCreateOrConnectWithoutTrafficSourceBmInput[]
    createMany?: TrafficSourceBmToApiAccessCreateManyTrafficSourceBmInputEnvelope
    connect?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
  }

  export type TrafficSourceAccountToTrafficSourceBmCreateNestedManyWithoutTrafficSourceBmInput = {
    create?: XOR<TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceBmInput, TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceBmInput> | TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceBmInput[] | TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceBmInput[]
    connectOrCreate?: TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceBmInput | TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceBmInput[]
    createMany?: TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceBmInputEnvelope
    connect?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
  }

  export type TrafficSourceAccountCreateNestedManyWithoutTrafficSourceOwnerBmInput = {
    create?: XOR<TrafficSourceAccountCreateWithoutTrafficSourceOwnerBmInput, TrafficSourceAccountUncheckedCreateWithoutTrafficSourceOwnerBmInput> | TrafficSourceAccountCreateWithoutTrafficSourceOwnerBmInput[] | TrafficSourceAccountUncheckedCreateWithoutTrafficSourceOwnerBmInput[]
    connectOrCreate?: TrafficSourceAccountCreateOrConnectWithoutTrafficSourceOwnerBmInput | TrafficSourceAccountCreateOrConnectWithoutTrafficSourceOwnerBmInput[]
    createMany?: TrafficSourceAccountCreateManyTrafficSourceOwnerBmInputEnvelope
    connect?: TrafficSourceAccountWhereUniqueInput | TrafficSourceAccountWhereUniqueInput[]
  }

  export type TrafficSourceBmToApiAccessUncheckedCreateNestedManyWithoutTrafficSourceBmInput = {
    create?: XOR<TrafficSourceBmToApiAccessCreateWithoutTrafficSourceBmInput, TrafficSourceBmToApiAccessUncheckedCreateWithoutTrafficSourceBmInput> | TrafficSourceBmToApiAccessCreateWithoutTrafficSourceBmInput[] | TrafficSourceBmToApiAccessUncheckedCreateWithoutTrafficSourceBmInput[]
    connectOrCreate?: TrafficSourceBmToApiAccessCreateOrConnectWithoutTrafficSourceBmInput | TrafficSourceBmToApiAccessCreateOrConnectWithoutTrafficSourceBmInput[]
    createMany?: TrafficSourceBmToApiAccessCreateManyTrafficSourceBmInputEnvelope
    connect?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
  }

  export type TrafficSourceAccountToTrafficSourceBmUncheckedCreateNestedManyWithoutTrafficSourceBmInput = {
    create?: XOR<TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceBmInput, TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceBmInput> | TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceBmInput[] | TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceBmInput[]
    connectOrCreate?: TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceBmInput | TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceBmInput[]
    createMany?: TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceBmInputEnvelope
    connect?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
  }

  export type TrafficSourceAccountUncheckedCreateNestedManyWithoutTrafficSourceOwnerBmInput = {
    create?: XOR<TrafficSourceAccountCreateWithoutTrafficSourceOwnerBmInput, TrafficSourceAccountUncheckedCreateWithoutTrafficSourceOwnerBmInput> | TrafficSourceAccountCreateWithoutTrafficSourceOwnerBmInput[] | TrafficSourceAccountUncheckedCreateWithoutTrafficSourceOwnerBmInput[]
    connectOrCreate?: TrafficSourceAccountCreateOrConnectWithoutTrafficSourceOwnerBmInput | TrafficSourceAccountCreateOrConnectWithoutTrafficSourceOwnerBmInput[]
    createMany?: TrafficSourceAccountCreateManyTrafficSourceOwnerBmInputEnvelope
    connect?: TrafficSourceAccountWhereUniqueInput | TrafficSourceAccountWhereUniqueInput[]
  }

  export type TrafficSourceBmToApiAccessUpdateManyWithoutTrafficSourceBmNestedInput = {
    create?: XOR<TrafficSourceBmToApiAccessCreateWithoutTrafficSourceBmInput, TrafficSourceBmToApiAccessUncheckedCreateWithoutTrafficSourceBmInput> | TrafficSourceBmToApiAccessCreateWithoutTrafficSourceBmInput[] | TrafficSourceBmToApiAccessUncheckedCreateWithoutTrafficSourceBmInput[]
    connectOrCreate?: TrafficSourceBmToApiAccessCreateOrConnectWithoutTrafficSourceBmInput | TrafficSourceBmToApiAccessCreateOrConnectWithoutTrafficSourceBmInput[]
    upsert?: TrafficSourceBmToApiAccessUpsertWithWhereUniqueWithoutTrafficSourceBmInput | TrafficSourceBmToApiAccessUpsertWithWhereUniqueWithoutTrafficSourceBmInput[]
    createMany?: TrafficSourceBmToApiAccessCreateManyTrafficSourceBmInputEnvelope
    set?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    disconnect?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    delete?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    connect?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    update?: TrafficSourceBmToApiAccessUpdateWithWhereUniqueWithoutTrafficSourceBmInput | TrafficSourceBmToApiAccessUpdateWithWhereUniqueWithoutTrafficSourceBmInput[]
    updateMany?: TrafficSourceBmToApiAccessUpdateManyWithWhereWithoutTrafficSourceBmInput | TrafficSourceBmToApiAccessUpdateManyWithWhereWithoutTrafficSourceBmInput[]
    deleteMany?: TrafficSourceBmToApiAccessScalarWhereInput | TrafficSourceBmToApiAccessScalarWhereInput[]
  }

  export type TrafficSourceAccountToTrafficSourceBmUpdateManyWithoutTrafficSourceBmNestedInput = {
    create?: XOR<TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceBmInput, TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceBmInput> | TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceBmInput[] | TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceBmInput[]
    connectOrCreate?: TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceBmInput | TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceBmInput[]
    upsert?: TrafficSourceAccountToTrafficSourceBmUpsertWithWhereUniqueWithoutTrafficSourceBmInput | TrafficSourceAccountToTrafficSourceBmUpsertWithWhereUniqueWithoutTrafficSourceBmInput[]
    createMany?: TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceBmInputEnvelope
    set?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    disconnect?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    delete?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    connect?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    update?: TrafficSourceAccountToTrafficSourceBmUpdateWithWhereUniqueWithoutTrafficSourceBmInput | TrafficSourceAccountToTrafficSourceBmUpdateWithWhereUniqueWithoutTrafficSourceBmInput[]
    updateMany?: TrafficSourceAccountToTrafficSourceBmUpdateManyWithWhereWithoutTrafficSourceBmInput | TrafficSourceAccountToTrafficSourceBmUpdateManyWithWhereWithoutTrafficSourceBmInput[]
    deleteMany?: TrafficSourceAccountToTrafficSourceBmScalarWhereInput | TrafficSourceAccountToTrafficSourceBmScalarWhereInput[]
  }

  export type TrafficSourceAccountUpdateManyWithoutTrafficSourceOwnerBmNestedInput = {
    create?: XOR<TrafficSourceAccountCreateWithoutTrafficSourceOwnerBmInput, TrafficSourceAccountUncheckedCreateWithoutTrafficSourceOwnerBmInput> | TrafficSourceAccountCreateWithoutTrafficSourceOwnerBmInput[] | TrafficSourceAccountUncheckedCreateWithoutTrafficSourceOwnerBmInput[]
    connectOrCreate?: TrafficSourceAccountCreateOrConnectWithoutTrafficSourceOwnerBmInput | TrafficSourceAccountCreateOrConnectWithoutTrafficSourceOwnerBmInput[]
    upsert?: TrafficSourceAccountUpsertWithWhereUniqueWithoutTrafficSourceOwnerBmInput | TrafficSourceAccountUpsertWithWhereUniqueWithoutTrafficSourceOwnerBmInput[]
    createMany?: TrafficSourceAccountCreateManyTrafficSourceOwnerBmInputEnvelope
    set?: TrafficSourceAccountWhereUniqueInput | TrafficSourceAccountWhereUniqueInput[]
    disconnect?: TrafficSourceAccountWhereUniqueInput | TrafficSourceAccountWhereUniqueInput[]
    delete?: TrafficSourceAccountWhereUniqueInput | TrafficSourceAccountWhereUniqueInput[]
    connect?: TrafficSourceAccountWhereUniqueInput | TrafficSourceAccountWhereUniqueInput[]
    update?: TrafficSourceAccountUpdateWithWhereUniqueWithoutTrafficSourceOwnerBmInput | TrafficSourceAccountUpdateWithWhereUniqueWithoutTrafficSourceOwnerBmInput[]
    updateMany?: TrafficSourceAccountUpdateManyWithWhereWithoutTrafficSourceOwnerBmInput | TrafficSourceAccountUpdateManyWithWhereWithoutTrafficSourceOwnerBmInput[]
    deleteMany?: TrafficSourceAccountScalarWhereInput | TrafficSourceAccountScalarWhereInput[]
  }

  export type TrafficSourceBmToApiAccessUncheckedUpdateManyWithoutTrafficSourceBmNestedInput = {
    create?: XOR<TrafficSourceBmToApiAccessCreateWithoutTrafficSourceBmInput, TrafficSourceBmToApiAccessUncheckedCreateWithoutTrafficSourceBmInput> | TrafficSourceBmToApiAccessCreateWithoutTrafficSourceBmInput[] | TrafficSourceBmToApiAccessUncheckedCreateWithoutTrafficSourceBmInput[]
    connectOrCreate?: TrafficSourceBmToApiAccessCreateOrConnectWithoutTrafficSourceBmInput | TrafficSourceBmToApiAccessCreateOrConnectWithoutTrafficSourceBmInput[]
    upsert?: TrafficSourceBmToApiAccessUpsertWithWhereUniqueWithoutTrafficSourceBmInput | TrafficSourceBmToApiAccessUpsertWithWhereUniqueWithoutTrafficSourceBmInput[]
    createMany?: TrafficSourceBmToApiAccessCreateManyTrafficSourceBmInputEnvelope
    set?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    disconnect?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    delete?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    connect?: TrafficSourceBmToApiAccessWhereUniqueInput | TrafficSourceBmToApiAccessWhereUniqueInput[]
    update?: TrafficSourceBmToApiAccessUpdateWithWhereUniqueWithoutTrafficSourceBmInput | TrafficSourceBmToApiAccessUpdateWithWhereUniqueWithoutTrafficSourceBmInput[]
    updateMany?: TrafficSourceBmToApiAccessUpdateManyWithWhereWithoutTrafficSourceBmInput | TrafficSourceBmToApiAccessUpdateManyWithWhereWithoutTrafficSourceBmInput[]
    deleteMany?: TrafficSourceBmToApiAccessScalarWhereInput | TrafficSourceBmToApiAccessScalarWhereInput[]
  }

  export type TrafficSourceAccountToTrafficSourceBmUncheckedUpdateManyWithoutTrafficSourceBmNestedInput = {
    create?: XOR<TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceBmInput, TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceBmInput> | TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceBmInput[] | TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceBmInput[]
    connectOrCreate?: TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceBmInput | TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceBmInput[]
    upsert?: TrafficSourceAccountToTrafficSourceBmUpsertWithWhereUniqueWithoutTrafficSourceBmInput | TrafficSourceAccountToTrafficSourceBmUpsertWithWhereUniqueWithoutTrafficSourceBmInput[]
    createMany?: TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceBmInputEnvelope
    set?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    disconnect?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    delete?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    connect?: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput | TrafficSourceAccountToTrafficSourceBmWhereUniqueInput[]
    update?: TrafficSourceAccountToTrafficSourceBmUpdateWithWhereUniqueWithoutTrafficSourceBmInput | TrafficSourceAccountToTrafficSourceBmUpdateWithWhereUniqueWithoutTrafficSourceBmInput[]
    updateMany?: TrafficSourceAccountToTrafficSourceBmUpdateManyWithWhereWithoutTrafficSourceBmInput | TrafficSourceAccountToTrafficSourceBmUpdateManyWithWhereWithoutTrafficSourceBmInput[]
    deleteMany?: TrafficSourceAccountToTrafficSourceBmScalarWhereInput | TrafficSourceAccountToTrafficSourceBmScalarWhereInput[]
  }

  export type TrafficSourceAccountUncheckedUpdateManyWithoutTrafficSourceOwnerBmNestedInput = {
    create?: XOR<TrafficSourceAccountCreateWithoutTrafficSourceOwnerBmInput, TrafficSourceAccountUncheckedCreateWithoutTrafficSourceOwnerBmInput> | TrafficSourceAccountCreateWithoutTrafficSourceOwnerBmInput[] | TrafficSourceAccountUncheckedCreateWithoutTrafficSourceOwnerBmInput[]
    connectOrCreate?: TrafficSourceAccountCreateOrConnectWithoutTrafficSourceOwnerBmInput | TrafficSourceAccountCreateOrConnectWithoutTrafficSourceOwnerBmInput[]
    upsert?: TrafficSourceAccountUpsertWithWhereUniqueWithoutTrafficSourceOwnerBmInput | TrafficSourceAccountUpsertWithWhereUniqueWithoutTrafficSourceOwnerBmInput[]
    createMany?: TrafficSourceAccountCreateManyTrafficSourceOwnerBmInputEnvelope
    set?: TrafficSourceAccountWhereUniqueInput | TrafficSourceAccountWhereUniqueInput[]
    disconnect?: TrafficSourceAccountWhereUniqueInput | TrafficSourceAccountWhereUniqueInput[]
    delete?: TrafficSourceAccountWhereUniqueInput | TrafficSourceAccountWhereUniqueInput[]
    connect?: TrafficSourceAccountWhereUniqueInput | TrafficSourceAccountWhereUniqueInput[]
    update?: TrafficSourceAccountUpdateWithWhereUniqueWithoutTrafficSourceOwnerBmInput | TrafficSourceAccountUpdateWithWhereUniqueWithoutTrafficSourceOwnerBmInput[]
    updateMany?: TrafficSourceAccountUpdateManyWithWhereWithoutTrafficSourceOwnerBmInput | TrafficSourceAccountUpdateManyWithWhereWithoutTrafficSourceOwnerBmInput[]
    deleteMany?: TrafficSourceAccountScalarWhereInput | TrafficSourceAccountScalarWhereInput[]
  }

  export type TrafficSourceBmCreateNestedOneWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    create?: XOR<TrafficSourceBmCreateWithoutTrafficSourceBmToApiAccessConnectionsInput, TrafficSourceBmUncheckedCreateWithoutTrafficSourceBmToApiAccessConnectionsInput>
    connectOrCreate?: TrafficSourceBmCreateOrConnectWithoutTrafficSourceBmToApiAccessConnectionsInput
    connect?: TrafficSourceBmWhereUniqueInput
  }

  export type ApiAccessCreateNestedOneWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    create?: XOR<ApiAccessCreateWithoutTrafficSourceBmToApiAccessConnectionsInput, ApiAccessUncheckedCreateWithoutTrafficSourceBmToApiAccessConnectionsInput>
    connectOrCreate?: ApiAccessCreateOrConnectWithoutTrafficSourceBmToApiAccessConnectionsInput
    connect?: ApiAccessWhereUniqueInput
  }

  export type TrafficSourceBmUpdateOneRequiredWithoutTrafficSourceBmToApiAccessConnectionsNestedInput = {
    create?: XOR<TrafficSourceBmCreateWithoutTrafficSourceBmToApiAccessConnectionsInput, TrafficSourceBmUncheckedCreateWithoutTrafficSourceBmToApiAccessConnectionsInput>
    connectOrCreate?: TrafficSourceBmCreateOrConnectWithoutTrafficSourceBmToApiAccessConnectionsInput
    upsert?: TrafficSourceBmUpsertWithoutTrafficSourceBmToApiAccessConnectionsInput
    connect?: TrafficSourceBmWhereUniqueInput
    update?: XOR<XOR<TrafficSourceBmUpdateToOneWithWhereWithoutTrafficSourceBmToApiAccessConnectionsInput, TrafficSourceBmUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput>, TrafficSourceBmUncheckedUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput>
  }

  export type ApiAccessUpdateOneRequiredWithoutTrafficSourceBmToApiAccessConnectionsNestedInput = {
    create?: XOR<ApiAccessCreateWithoutTrafficSourceBmToApiAccessConnectionsInput, ApiAccessUncheckedCreateWithoutTrafficSourceBmToApiAccessConnectionsInput>
    connectOrCreate?: ApiAccessCreateOrConnectWithoutTrafficSourceBmToApiAccessConnectionsInput
    upsert?: ApiAccessUpsertWithoutTrafficSourceBmToApiAccessConnectionsInput
    connect?: ApiAccessWhereUniqueInput
    update?: XOR<XOR<ApiAccessUpdateToOneWithWhereWithoutTrafficSourceBmToApiAccessConnectionsInput, ApiAccessUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput>, ApiAccessUncheckedUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput>
  }

  export type TrafficSourceAccountCreateNestedOneWithoutTrafficSourceDailyAdStatsInput = {
    create?: XOR<TrafficSourceAccountCreateWithoutTrafficSourceDailyAdStatsInput, TrafficSourceAccountUncheckedCreateWithoutTrafficSourceDailyAdStatsInput>
    connectOrCreate?: TrafficSourceAccountCreateOrConnectWithoutTrafficSourceDailyAdStatsInput
    connect?: TrafficSourceAccountWhereUniqueInput
  }

  export type TrafficSourceAccountUpdateOneRequiredWithoutTrafficSourceDailyAdStatsNestedInput = {
    create?: XOR<TrafficSourceAccountCreateWithoutTrafficSourceDailyAdStatsInput, TrafficSourceAccountUncheckedCreateWithoutTrafficSourceDailyAdStatsInput>
    connectOrCreate?: TrafficSourceAccountCreateOrConnectWithoutTrafficSourceDailyAdStatsInput
    upsert?: TrafficSourceAccountUpsertWithoutTrafficSourceDailyAdStatsInput
    connect?: TrafficSourceAccountWhereUniqueInput
    update?: XOR<XOR<TrafficSourceAccountUpdateToOneWithWhereWithoutTrafficSourceDailyAdStatsInput, TrafficSourceAccountUpdateWithoutTrafficSourceDailyAdStatsInput>, TrafficSourceAccountUncheckedUpdateWithoutTrafficSourceDailyAdStatsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumTrafficSourceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TrafficSourceType | EnumTrafficSourceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTrafficSourceTypeNullableFilter<$PrismaModel> | $Enums.TrafficSourceType | null
  }

  export type NestedEnumApiAccessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiAccessType | EnumApiAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ApiAccessType[] | ListEnumApiAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiAccessType[] | ListEnumApiAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumApiAccessTypeFilter<$PrismaModel> | $Enums.ApiAccessType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTrafficSourceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrafficSourceType | EnumTrafficSourceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTrafficSourceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TrafficSourceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTrafficSourceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumTrafficSourceTypeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumApiAccessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiAccessType | EnumApiAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ApiAccessType[] | ListEnumApiAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiAccessType[] | ListEnumApiAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumApiAccessTypeWithAggregatesFilter<$PrismaModel> | $Enums.ApiAccessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApiAccessTypeFilter<$PrismaModel>
    _max?: NestedEnumApiAccessTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTrafficSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TrafficSourceType | EnumTrafficSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrafficSourceTypeFilter<$PrismaModel> | $Enums.TrafficSourceType
  }

  export type NestedEnumTrafficSourceAccountStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TrafficSourceAccountStatus | EnumTrafficSourceAccountStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TrafficSourceAccountStatus[] | ListEnumTrafficSourceAccountStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TrafficSourceAccountStatus[] | ListEnumTrafficSourceAccountStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTrafficSourceAccountStatusNullableFilter<$PrismaModel> | $Enums.TrafficSourceAccountStatus | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumTrafficSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrafficSourceType | EnumTrafficSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrafficSourceType[] | ListEnumTrafficSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrafficSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.TrafficSourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrafficSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumTrafficSourceTypeFilter<$PrismaModel>
  }

  export type NestedEnumTrafficSourceAccountStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrafficSourceAccountStatus | EnumTrafficSourceAccountStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TrafficSourceAccountStatus[] | ListEnumTrafficSourceAccountStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TrafficSourceAccountStatus[] | ListEnumTrafficSourceAccountStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTrafficSourceAccountStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TrafficSourceAccountStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTrafficSourceAccountStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumTrafficSourceAccountStatusNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type TrafficSourceBmToApiAccessCreateWithoutApiAccessInput = {
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceBm: TrafficSourceBmCreateNestedOneWithoutTrafficSourceBmToApiAccessConnectionsInput
  }

  export type TrafficSourceBmToApiAccessUncheckedCreateWithoutApiAccessInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceBmId: number
  }

  export type TrafficSourceBmToApiAccessCreateOrConnectWithoutApiAccessInput = {
    where: TrafficSourceBmToApiAccessWhereUniqueInput
    create: XOR<TrafficSourceBmToApiAccessCreateWithoutApiAccessInput, TrafficSourceBmToApiAccessUncheckedCreateWithoutApiAccessInput>
  }

  export type TrafficSourceBmToApiAccessCreateManyApiAccessInputEnvelope = {
    data: TrafficSourceBmToApiAccessCreateManyApiAccessInput | TrafficSourceBmToApiAccessCreateManyApiAccessInput[]
    skipDuplicates?: boolean
  }

  export type TrafficSourceBmToApiAccessUpsertWithWhereUniqueWithoutApiAccessInput = {
    where: TrafficSourceBmToApiAccessWhereUniqueInput
    update: XOR<TrafficSourceBmToApiAccessUpdateWithoutApiAccessInput, TrafficSourceBmToApiAccessUncheckedUpdateWithoutApiAccessInput>
    create: XOR<TrafficSourceBmToApiAccessCreateWithoutApiAccessInput, TrafficSourceBmToApiAccessUncheckedCreateWithoutApiAccessInput>
  }

  export type TrafficSourceBmToApiAccessUpdateWithWhereUniqueWithoutApiAccessInput = {
    where: TrafficSourceBmToApiAccessWhereUniqueInput
    data: XOR<TrafficSourceBmToApiAccessUpdateWithoutApiAccessInput, TrafficSourceBmToApiAccessUncheckedUpdateWithoutApiAccessInput>
  }

  export type TrafficSourceBmToApiAccessUpdateManyWithWhereWithoutApiAccessInput = {
    where: TrafficSourceBmToApiAccessScalarWhereInput
    data: XOR<TrafficSourceBmToApiAccessUpdateManyMutationInput, TrafficSourceBmToApiAccessUncheckedUpdateManyWithoutApiAccessInput>
  }

  export type TrafficSourceBmToApiAccessScalarWhereInput = {
    AND?: TrafficSourceBmToApiAccessScalarWhereInput | TrafficSourceBmToApiAccessScalarWhereInput[]
    OR?: TrafficSourceBmToApiAccessScalarWhereInput[]
    NOT?: TrafficSourceBmToApiAccessScalarWhereInput | TrafficSourceBmToApiAccessScalarWhereInput[]
    id?: IntFilter<"TrafficSourceBmToApiAccess"> | number
    createDate?: DateTimeFilter<"TrafficSourceBmToApiAccess"> | Date | string
    updateDate?: DateTimeFilter<"TrafficSourceBmToApiAccess"> | Date | string
    trafficSourceBmId?: IntFilter<"TrafficSourceBmToApiAccess"> | number
    apiAccessId?: IntFilter<"TrafficSourceBmToApiAccess"> | number
  }

  export type TaskCreateWithoutTaskLoopInput = {
    createDate?: Date | string
    updateDate?: Date | string
    type: $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.TaskStatus
    result?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startTime?: Date | string | null
    endTime?: Date | string | null
  }

  export type TaskUncheckedCreateWithoutTaskLoopInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    type: $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.TaskStatus
    result?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startTime?: Date | string | null
    endTime?: Date | string | null
  }

  export type TaskCreateOrConnectWithoutTaskLoopInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTaskLoopInput, TaskUncheckedCreateWithoutTaskLoopInput>
  }

  export type TaskCreateManyTaskLoopInputEnvelope = {
    data: TaskCreateManyTaskLoopInput | TaskCreateManyTaskLoopInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutTaskLoopInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutTaskLoopInput, TaskUncheckedUpdateWithoutTaskLoopInput>
    create: XOR<TaskCreateWithoutTaskLoopInput, TaskUncheckedCreateWithoutTaskLoopInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutTaskLoopInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutTaskLoopInput, TaskUncheckedUpdateWithoutTaskLoopInput>
  }

  export type TaskUpdateManyWithWhereWithoutTaskLoopInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTaskLoopInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    createDate?: DateTimeFilter<"Task"> | Date | string
    updateDate?: DateTimeFilter<"Task"> | Date | string
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    payload?: JsonNullableFilter<"Task">
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    result?: JsonNullableFilter<"Task">
    error?: StringNullableFilter<"Task"> | string | null
    startTime?: DateTimeNullableFilter<"Task"> | Date | string | null
    endTime?: DateTimeNullableFilter<"Task"> | Date | string | null
    taskLoopId?: IntNullableFilter<"Task"> | number | null
  }

  export type TaskLoopCreateWithoutTasksInput = {
    createDate?: Date | string
    updateDate?: Date | string
    type: $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    intervalMin: number
    isActive: boolean
  }

  export type TaskLoopUncheckedCreateWithoutTasksInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    type: $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    intervalMin: number
    isActive: boolean
  }

  export type TaskLoopCreateOrConnectWithoutTasksInput = {
    where: TaskLoopWhereUniqueInput
    create: XOR<TaskLoopCreateWithoutTasksInput, TaskLoopUncheckedCreateWithoutTasksInput>
  }

  export type TaskLoopUpsertWithoutTasksInput = {
    update: XOR<TaskLoopUpdateWithoutTasksInput, TaskLoopUncheckedUpdateWithoutTasksInput>
    create: XOR<TaskLoopCreateWithoutTasksInput, TaskLoopUncheckedCreateWithoutTasksInput>
    where?: TaskLoopWhereInput
  }

  export type TaskLoopUpdateToOneWithWhereWithoutTasksInput = {
    where?: TaskLoopWhereInput
    data: XOR<TaskLoopUpdateWithoutTasksInput, TaskLoopUncheckedUpdateWithoutTasksInput>
  }

  export type TaskLoopUpdateWithoutTasksInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    intervalMin?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskLoopUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    intervalMin?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrafficSourceBmCreateWithoutAccountsOwnedInput = {
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    isActive?: boolean
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessCreateNestedManyWithoutTrafficSourceBmInput
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmCreateNestedManyWithoutTrafficSourceBmInput
  }

  export type TrafficSourceBmUncheckedCreateWithoutAccountsOwnedInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    isActive?: boolean
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessUncheckedCreateNestedManyWithoutTrafficSourceBmInput
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUncheckedCreateNestedManyWithoutTrafficSourceBmInput
  }

  export type TrafficSourceBmCreateOrConnectWithoutAccountsOwnedInput = {
    where: TrafficSourceBmWhereUniqueInput
    create: XOR<TrafficSourceBmCreateWithoutAccountsOwnedInput, TrafficSourceBmUncheckedCreateWithoutAccountsOwnedInput>
  }

  export type TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceAccountInput = {
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceBm: TrafficSourceBmCreateNestedOneWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput
  }

  export type TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceBmId: number
  }

  export type TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceAccountInput = {
    where: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
    create: XOR<TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceAccountInput, TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountInput>
  }

  export type TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceAccountInputEnvelope = {
    data: TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceAccountInput | TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceAccountInput[]
    skipDuplicates?: boolean
  }

  export type TrafficSourceDailyAdStatCreateWithoutTrafficSourceAccountInput = {
    createDate?: Date | string
    updateDate?: Date | string
    spend: Decimal | DecimalJsLike | number | string
    clicks: number
    externalAdId: string
    externalAdSetId: string
    externalCampaignId: string
    impressions: number
    externalDateStart: Date | string
    externalDateStop: Date | string
    trafficSourceType: $Enums.TrafficSourceType
  }

  export type TrafficSourceDailyAdStatUncheckedCreateWithoutTrafficSourceAccountInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    spend: Decimal | DecimalJsLike | number | string
    clicks: number
    externalAdId: string
    externalAdSetId: string
    externalCampaignId: string
    impressions: number
    externalDateStart: Date | string
    externalDateStop: Date | string
    trafficSourceType: $Enums.TrafficSourceType
  }

  export type TrafficSourceDailyAdStatCreateOrConnectWithoutTrafficSourceAccountInput = {
    where: TrafficSourceDailyAdStatWhereUniqueInput
    create: XOR<TrafficSourceDailyAdStatCreateWithoutTrafficSourceAccountInput, TrafficSourceDailyAdStatUncheckedCreateWithoutTrafficSourceAccountInput>
  }

  export type TrafficSourceDailyAdStatCreateManyTrafficSourceAccountInputEnvelope = {
    data: TrafficSourceDailyAdStatCreateManyTrafficSourceAccountInput | TrafficSourceDailyAdStatCreateManyTrafficSourceAccountInput[]
    skipDuplicates?: boolean
  }

  export type TrafficSourceBmUpsertWithoutAccountsOwnedInput = {
    update: XOR<TrafficSourceBmUpdateWithoutAccountsOwnedInput, TrafficSourceBmUncheckedUpdateWithoutAccountsOwnedInput>
    create: XOR<TrafficSourceBmCreateWithoutAccountsOwnedInput, TrafficSourceBmUncheckedCreateWithoutAccountsOwnedInput>
    where?: TrafficSourceBmWhereInput
  }

  export type TrafficSourceBmUpdateToOneWithWhereWithoutAccountsOwnedInput = {
    where?: TrafficSourceBmWhereInput
    data: XOR<TrafficSourceBmUpdateWithoutAccountsOwnedInput, TrafficSourceBmUncheckedUpdateWithoutAccountsOwnedInput>
  }

  export type TrafficSourceBmUpdateWithoutAccountsOwnedInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessUpdateManyWithoutTrafficSourceBmNestedInput
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUpdateManyWithoutTrafficSourceBmNestedInput
  }

  export type TrafficSourceBmUncheckedUpdateWithoutAccountsOwnedInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessUncheckedUpdateManyWithoutTrafficSourceBmNestedInput
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUncheckedUpdateManyWithoutTrafficSourceBmNestedInput
  }

  export type TrafficSourceAccountToTrafficSourceBmUpsertWithWhereUniqueWithoutTrafficSourceAccountInput = {
    where: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
    update: XOR<TrafficSourceAccountToTrafficSourceBmUpdateWithoutTrafficSourceAccountInput, TrafficSourceAccountToTrafficSourceBmUncheckedUpdateWithoutTrafficSourceAccountInput>
    create: XOR<TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceAccountInput, TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountInput>
  }

  export type TrafficSourceAccountToTrafficSourceBmUpdateWithWhereUniqueWithoutTrafficSourceAccountInput = {
    where: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
    data: XOR<TrafficSourceAccountToTrafficSourceBmUpdateWithoutTrafficSourceAccountInput, TrafficSourceAccountToTrafficSourceBmUncheckedUpdateWithoutTrafficSourceAccountInput>
  }

  export type TrafficSourceAccountToTrafficSourceBmUpdateManyWithWhereWithoutTrafficSourceAccountInput = {
    where: TrafficSourceAccountToTrafficSourceBmScalarWhereInput
    data: XOR<TrafficSourceAccountToTrafficSourceBmUpdateManyMutationInput, TrafficSourceAccountToTrafficSourceBmUncheckedUpdateManyWithoutTrafficSourceAccountInput>
  }

  export type TrafficSourceAccountToTrafficSourceBmScalarWhereInput = {
    AND?: TrafficSourceAccountToTrafficSourceBmScalarWhereInput | TrafficSourceAccountToTrafficSourceBmScalarWhereInput[]
    OR?: TrafficSourceAccountToTrafficSourceBmScalarWhereInput[]
    NOT?: TrafficSourceAccountToTrafficSourceBmScalarWhereInput | TrafficSourceAccountToTrafficSourceBmScalarWhereInput[]
    id?: IntFilter<"TrafficSourceAccountToTrafficSourceBm"> | number
    createDate?: DateTimeFilter<"TrafficSourceAccountToTrafficSourceBm"> | Date | string
    updateDate?: DateTimeFilter<"TrafficSourceAccountToTrafficSourceBm"> | Date | string
    trafficSourceBmId?: IntFilter<"TrafficSourceAccountToTrafficSourceBm"> | number
    trafficSourceAccountId?: IntFilter<"TrafficSourceAccountToTrafficSourceBm"> | number
  }

  export type TrafficSourceDailyAdStatUpsertWithWhereUniqueWithoutTrafficSourceAccountInput = {
    where: TrafficSourceDailyAdStatWhereUniqueInput
    update: XOR<TrafficSourceDailyAdStatUpdateWithoutTrafficSourceAccountInput, TrafficSourceDailyAdStatUncheckedUpdateWithoutTrafficSourceAccountInput>
    create: XOR<TrafficSourceDailyAdStatCreateWithoutTrafficSourceAccountInput, TrafficSourceDailyAdStatUncheckedCreateWithoutTrafficSourceAccountInput>
  }

  export type TrafficSourceDailyAdStatUpdateWithWhereUniqueWithoutTrafficSourceAccountInput = {
    where: TrafficSourceDailyAdStatWhereUniqueInput
    data: XOR<TrafficSourceDailyAdStatUpdateWithoutTrafficSourceAccountInput, TrafficSourceDailyAdStatUncheckedUpdateWithoutTrafficSourceAccountInput>
  }

  export type TrafficSourceDailyAdStatUpdateManyWithWhereWithoutTrafficSourceAccountInput = {
    where: TrafficSourceDailyAdStatScalarWhereInput
    data: XOR<TrafficSourceDailyAdStatUpdateManyMutationInput, TrafficSourceDailyAdStatUncheckedUpdateManyWithoutTrafficSourceAccountInput>
  }

  export type TrafficSourceDailyAdStatScalarWhereInput = {
    AND?: TrafficSourceDailyAdStatScalarWhereInput | TrafficSourceDailyAdStatScalarWhereInput[]
    OR?: TrafficSourceDailyAdStatScalarWhereInput[]
    NOT?: TrafficSourceDailyAdStatScalarWhereInput | TrafficSourceDailyAdStatScalarWhereInput[]
    id?: IntFilter<"TrafficSourceDailyAdStat"> | number
    createDate?: DateTimeFilter<"TrafficSourceDailyAdStat"> | Date | string
    updateDate?: DateTimeFilter<"TrafficSourceDailyAdStat"> | Date | string
    spend?: DecimalFilter<"TrafficSourceDailyAdStat"> | Decimal | DecimalJsLike | number | string
    clicks?: IntFilter<"TrafficSourceDailyAdStat"> | number
    externalAdId?: StringFilter<"TrafficSourceDailyAdStat"> | string
    externalAdSetId?: StringFilter<"TrafficSourceDailyAdStat"> | string
    externalCampaignId?: StringFilter<"TrafficSourceDailyAdStat"> | string
    impressions?: IntFilter<"TrafficSourceDailyAdStat"> | number
    externalDateStart?: DateTimeFilter<"TrafficSourceDailyAdStat"> | Date | string
    externalDateStop?: DateTimeFilter<"TrafficSourceDailyAdStat"> | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFilter<"TrafficSourceDailyAdStat"> | $Enums.TrafficSourceType
    trafficSourceAccountId?: IntFilter<"TrafficSourceDailyAdStat"> | number
  }

  export type TrafficSourceBmCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    isActive?: boolean
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessCreateNestedManyWithoutTrafficSourceBmInput
    accountsOwned?: TrafficSourceAccountCreateNestedManyWithoutTrafficSourceOwnerBmInput
  }

  export type TrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    isActive?: boolean
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessUncheckedCreateNestedManyWithoutTrafficSourceBmInput
    accountsOwned?: TrafficSourceAccountUncheckedCreateNestedManyWithoutTrafficSourceOwnerBmInput
  }

  export type TrafficSourceBmCreateOrConnectWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    where: TrafficSourceBmWhereUniqueInput
    create: XOR<TrafficSourceBmCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput, TrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>
  }

  export type TrafficSourceAccountCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    externalStatus: string
    externalCreatedTime: Date | string
    status?: $Enums.TrafficSourceAccountStatus | null
    balance: Decimal | DecimalJsLike | number | string
    externalCurrency: string
    externalTimezone: string
    spendCap: Decimal | DecimalJsLike | number | string
    amountSpent: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    trafficSourceOwnerBm?: TrafficSourceBmCreateNestedOneWithoutAccountsOwnedInput
    trafficSourceDailyAdStats?: TrafficSourceDailyAdStatCreateNestedManyWithoutTrafficSourceAccountInput
  }

  export type TrafficSourceAccountUncheckedCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    externalStatus: string
    externalCreatedTime: Date | string
    status?: $Enums.TrafficSourceAccountStatus | null
    balance: Decimal | DecimalJsLike | number | string
    externalCurrency: string
    externalTimezone: string
    spendCap: Decimal | DecimalJsLike | number | string
    amountSpent: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    trafficSourceOwnerBmId?: number | null
    trafficSourceDailyAdStats?: TrafficSourceDailyAdStatUncheckedCreateNestedManyWithoutTrafficSourceAccountInput
  }

  export type TrafficSourceAccountCreateOrConnectWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    where: TrafficSourceAccountWhereUniqueInput
    create: XOR<TrafficSourceAccountCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput, TrafficSourceAccountUncheckedCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>
  }

  export type TrafficSourceBmUpsertWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    update: XOR<TrafficSourceBmUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput, TrafficSourceBmUncheckedUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>
    create: XOR<TrafficSourceBmCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput, TrafficSourceBmUncheckedCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>
    where?: TrafficSourceBmWhereInput
  }

  export type TrafficSourceBmUpdateToOneWithWhereWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    where?: TrafficSourceBmWhereInput
    data: XOR<TrafficSourceBmUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput, TrafficSourceBmUncheckedUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>
  }

  export type TrafficSourceBmUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessUpdateManyWithoutTrafficSourceBmNestedInput
    accountsOwned?: TrafficSourceAccountUpdateManyWithoutTrafficSourceOwnerBmNestedInput
  }

  export type TrafficSourceBmUncheckedUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceBmToApiAccessConnections?: TrafficSourceBmToApiAccessUncheckedUpdateManyWithoutTrafficSourceBmNestedInput
    accountsOwned?: TrafficSourceAccountUncheckedUpdateManyWithoutTrafficSourceOwnerBmNestedInput
  }

  export type TrafficSourceAccountUpsertWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    update: XOR<TrafficSourceAccountUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput, TrafficSourceAccountUncheckedUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>
    create: XOR<TrafficSourceAccountCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput, TrafficSourceAccountUncheckedCreateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>
    where?: TrafficSourceAccountWhereInput
  }

  export type TrafficSourceAccountUpdateToOneWithWhereWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    where?: TrafficSourceAccountWhereInput
    data: XOR<TrafficSourceAccountUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput, TrafficSourceAccountUncheckedUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput>
  }

  export type TrafficSourceAccountUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalStatus?: StringFieldUpdateOperationsInput | string
    externalCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableEnumTrafficSourceAccountStatusFieldUpdateOperationsInput | $Enums.TrafficSourceAccountStatus | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalCurrency?: StringFieldUpdateOperationsInput | string
    externalTimezone?: StringFieldUpdateOperationsInput | string
    spendCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceOwnerBm?: TrafficSourceBmUpdateOneWithoutAccountsOwnedNestedInput
    trafficSourceDailyAdStats?: TrafficSourceDailyAdStatUpdateManyWithoutTrafficSourceAccountNestedInput
  }

  export type TrafficSourceAccountUncheckedUpdateWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalStatus?: StringFieldUpdateOperationsInput | string
    externalCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableEnumTrafficSourceAccountStatusFieldUpdateOperationsInput | $Enums.TrafficSourceAccountStatus | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalCurrency?: StringFieldUpdateOperationsInput | string
    externalTimezone?: StringFieldUpdateOperationsInput | string
    spendCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceOwnerBmId?: NullableIntFieldUpdateOperationsInput | number | null
    trafficSourceDailyAdStats?: TrafficSourceDailyAdStatUncheckedUpdateManyWithoutTrafficSourceAccountNestedInput
  }

  export type TrafficSourceBmToApiAccessCreateWithoutTrafficSourceBmInput = {
    createDate?: Date | string
    updateDate?: Date | string
    apiAccess: ApiAccessCreateNestedOneWithoutTrafficSourceBmToApiAccessConnectionsInput
  }

  export type TrafficSourceBmToApiAccessUncheckedCreateWithoutTrafficSourceBmInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    apiAccessId: number
  }

  export type TrafficSourceBmToApiAccessCreateOrConnectWithoutTrafficSourceBmInput = {
    where: TrafficSourceBmToApiAccessWhereUniqueInput
    create: XOR<TrafficSourceBmToApiAccessCreateWithoutTrafficSourceBmInput, TrafficSourceBmToApiAccessUncheckedCreateWithoutTrafficSourceBmInput>
  }

  export type TrafficSourceBmToApiAccessCreateManyTrafficSourceBmInputEnvelope = {
    data: TrafficSourceBmToApiAccessCreateManyTrafficSourceBmInput | TrafficSourceBmToApiAccessCreateManyTrafficSourceBmInput[]
    skipDuplicates?: boolean
  }

  export type TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceBmInput = {
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceAccount: TrafficSourceAccountCreateNestedOneWithoutTrafficSourceAccountToTrafficSourceBmConnectionsInput
  }

  export type TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceBmInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceAccountId: number
  }

  export type TrafficSourceAccountToTrafficSourceBmCreateOrConnectWithoutTrafficSourceBmInput = {
    where: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
    create: XOR<TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceBmInput, TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceBmInput>
  }

  export type TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceBmInputEnvelope = {
    data: TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceBmInput | TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceBmInput[]
    skipDuplicates?: boolean
  }

  export type TrafficSourceAccountCreateWithoutTrafficSourceOwnerBmInput = {
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    externalStatus: string
    externalCreatedTime: Date | string
    status?: $Enums.TrafficSourceAccountStatus | null
    balance: Decimal | DecimalJsLike | number | string
    externalCurrency: string
    externalTimezone: string
    spendCap: Decimal | DecimalJsLike | number | string
    amountSpent: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmCreateNestedManyWithoutTrafficSourceAccountInput
    trafficSourceDailyAdStats?: TrafficSourceDailyAdStatCreateNestedManyWithoutTrafficSourceAccountInput
  }

  export type TrafficSourceAccountUncheckedCreateWithoutTrafficSourceOwnerBmInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    externalStatus: string
    externalCreatedTime: Date | string
    status?: $Enums.TrafficSourceAccountStatus | null
    balance: Decimal | DecimalJsLike | number | string
    externalCurrency: string
    externalTimezone: string
    spendCap: Decimal | DecimalJsLike | number | string
    amountSpent: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUncheckedCreateNestedManyWithoutTrafficSourceAccountInput
    trafficSourceDailyAdStats?: TrafficSourceDailyAdStatUncheckedCreateNestedManyWithoutTrafficSourceAccountInput
  }

  export type TrafficSourceAccountCreateOrConnectWithoutTrafficSourceOwnerBmInput = {
    where: TrafficSourceAccountWhereUniqueInput
    create: XOR<TrafficSourceAccountCreateWithoutTrafficSourceOwnerBmInput, TrafficSourceAccountUncheckedCreateWithoutTrafficSourceOwnerBmInput>
  }

  export type TrafficSourceAccountCreateManyTrafficSourceOwnerBmInputEnvelope = {
    data: TrafficSourceAccountCreateManyTrafficSourceOwnerBmInput | TrafficSourceAccountCreateManyTrafficSourceOwnerBmInput[]
    skipDuplicates?: boolean
  }

  export type TrafficSourceBmToApiAccessUpsertWithWhereUniqueWithoutTrafficSourceBmInput = {
    where: TrafficSourceBmToApiAccessWhereUniqueInput
    update: XOR<TrafficSourceBmToApiAccessUpdateWithoutTrafficSourceBmInput, TrafficSourceBmToApiAccessUncheckedUpdateWithoutTrafficSourceBmInput>
    create: XOR<TrafficSourceBmToApiAccessCreateWithoutTrafficSourceBmInput, TrafficSourceBmToApiAccessUncheckedCreateWithoutTrafficSourceBmInput>
  }

  export type TrafficSourceBmToApiAccessUpdateWithWhereUniqueWithoutTrafficSourceBmInput = {
    where: TrafficSourceBmToApiAccessWhereUniqueInput
    data: XOR<TrafficSourceBmToApiAccessUpdateWithoutTrafficSourceBmInput, TrafficSourceBmToApiAccessUncheckedUpdateWithoutTrafficSourceBmInput>
  }

  export type TrafficSourceBmToApiAccessUpdateManyWithWhereWithoutTrafficSourceBmInput = {
    where: TrafficSourceBmToApiAccessScalarWhereInput
    data: XOR<TrafficSourceBmToApiAccessUpdateManyMutationInput, TrafficSourceBmToApiAccessUncheckedUpdateManyWithoutTrafficSourceBmInput>
  }

  export type TrafficSourceAccountToTrafficSourceBmUpsertWithWhereUniqueWithoutTrafficSourceBmInput = {
    where: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
    update: XOR<TrafficSourceAccountToTrafficSourceBmUpdateWithoutTrafficSourceBmInput, TrafficSourceAccountToTrafficSourceBmUncheckedUpdateWithoutTrafficSourceBmInput>
    create: XOR<TrafficSourceAccountToTrafficSourceBmCreateWithoutTrafficSourceBmInput, TrafficSourceAccountToTrafficSourceBmUncheckedCreateWithoutTrafficSourceBmInput>
  }

  export type TrafficSourceAccountToTrafficSourceBmUpdateWithWhereUniqueWithoutTrafficSourceBmInput = {
    where: TrafficSourceAccountToTrafficSourceBmWhereUniqueInput
    data: XOR<TrafficSourceAccountToTrafficSourceBmUpdateWithoutTrafficSourceBmInput, TrafficSourceAccountToTrafficSourceBmUncheckedUpdateWithoutTrafficSourceBmInput>
  }

  export type TrafficSourceAccountToTrafficSourceBmUpdateManyWithWhereWithoutTrafficSourceBmInput = {
    where: TrafficSourceAccountToTrafficSourceBmScalarWhereInput
    data: XOR<TrafficSourceAccountToTrafficSourceBmUpdateManyMutationInput, TrafficSourceAccountToTrafficSourceBmUncheckedUpdateManyWithoutTrafficSourceBmInput>
  }

  export type TrafficSourceAccountUpsertWithWhereUniqueWithoutTrafficSourceOwnerBmInput = {
    where: TrafficSourceAccountWhereUniqueInput
    update: XOR<TrafficSourceAccountUpdateWithoutTrafficSourceOwnerBmInput, TrafficSourceAccountUncheckedUpdateWithoutTrafficSourceOwnerBmInput>
    create: XOR<TrafficSourceAccountCreateWithoutTrafficSourceOwnerBmInput, TrafficSourceAccountUncheckedCreateWithoutTrafficSourceOwnerBmInput>
  }

  export type TrafficSourceAccountUpdateWithWhereUniqueWithoutTrafficSourceOwnerBmInput = {
    where: TrafficSourceAccountWhereUniqueInput
    data: XOR<TrafficSourceAccountUpdateWithoutTrafficSourceOwnerBmInput, TrafficSourceAccountUncheckedUpdateWithoutTrafficSourceOwnerBmInput>
  }

  export type TrafficSourceAccountUpdateManyWithWhereWithoutTrafficSourceOwnerBmInput = {
    where: TrafficSourceAccountScalarWhereInput
    data: XOR<TrafficSourceAccountUpdateManyMutationInput, TrafficSourceAccountUncheckedUpdateManyWithoutTrafficSourceOwnerBmInput>
  }

  export type TrafficSourceAccountScalarWhereInput = {
    AND?: TrafficSourceAccountScalarWhereInput | TrafficSourceAccountScalarWhereInput[]
    OR?: TrafficSourceAccountScalarWhereInput[]
    NOT?: TrafficSourceAccountScalarWhereInput | TrafficSourceAccountScalarWhereInput[]
    id?: IntFilter<"TrafficSourceAccount"> | number
    createDate?: DateTimeFilter<"TrafficSourceAccount"> | Date | string
    updateDate?: DateTimeFilter<"TrafficSourceAccount"> | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFilter<"TrafficSourceAccount"> | $Enums.TrafficSourceType
    externalId?: StringFilter<"TrafficSourceAccount"> | string
    name?: StringFilter<"TrafficSourceAccount"> | string
    externalStatus?: StringFilter<"TrafficSourceAccount"> | string
    externalCreatedTime?: DateTimeFilter<"TrafficSourceAccount"> | Date | string
    status?: EnumTrafficSourceAccountStatusNullableFilter<"TrafficSourceAccount"> | $Enums.TrafficSourceAccountStatus | null
    balance?: DecimalFilter<"TrafficSourceAccount"> | Decimal | DecimalJsLike | number | string
    externalCurrency?: StringFilter<"TrafficSourceAccount"> | string
    externalTimezone?: StringFilter<"TrafficSourceAccount"> | string
    spendCap?: DecimalFilter<"TrafficSourceAccount"> | Decimal | DecimalJsLike | number | string
    amountSpent?: DecimalFilter<"TrafficSourceAccount"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"TrafficSourceAccount"> | boolean
    trafficSourceOwnerBmId?: IntNullableFilter<"TrafficSourceAccount"> | number | null
  }

  export type TrafficSourceBmCreateWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    isActive?: boolean
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmCreateNestedManyWithoutTrafficSourceBmInput
    accountsOwned?: TrafficSourceAccountCreateNestedManyWithoutTrafficSourceOwnerBmInput
  }

  export type TrafficSourceBmUncheckedCreateWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    isActive?: boolean
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUncheckedCreateNestedManyWithoutTrafficSourceBmInput
    accountsOwned?: TrafficSourceAccountUncheckedCreateNestedManyWithoutTrafficSourceOwnerBmInput
  }

  export type TrafficSourceBmCreateOrConnectWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    where: TrafficSourceBmWhereUniqueInput
    create: XOR<TrafficSourceBmCreateWithoutTrafficSourceBmToApiAccessConnectionsInput, TrafficSourceBmUncheckedCreateWithoutTrafficSourceBmToApiAccessConnectionsInput>
  }

  export type ApiAccessCreateWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType?: $Enums.TrafficSourceType | null
    apiAccessType: $Enums.ApiAccessType
    isActive: boolean
    name: string
    login?: string | null
    password?: string | null
    firstAccessToken?: string | null
    secondAccessToken?: string | null
  }

  export type ApiAccessUncheckedCreateWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType?: $Enums.TrafficSourceType | null
    apiAccessType: $Enums.ApiAccessType
    isActive: boolean
    name: string
    login?: string | null
    password?: string | null
    firstAccessToken?: string | null
    secondAccessToken?: string | null
  }

  export type ApiAccessCreateOrConnectWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    where: ApiAccessWhereUniqueInput
    create: XOR<ApiAccessCreateWithoutTrafficSourceBmToApiAccessConnectionsInput, ApiAccessUncheckedCreateWithoutTrafficSourceBmToApiAccessConnectionsInput>
  }

  export type TrafficSourceBmUpsertWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    update: XOR<TrafficSourceBmUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput, TrafficSourceBmUncheckedUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput>
    create: XOR<TrafficSourceBmCreateWithoutTrafficSourceBmToApiAccessConnectionsInput, TrafficSourceBmUncheckedCreateWithoutTrafficSourceBmToApiAccessConnectionsInput>
    where?: TrafficSourceBmWhereInput
  }

  export type TrafficSourceBmUpdateToOneWithWhereWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    where?: TrafficSourceBmWhereInput
    data: XOR<TrafficSourceBmUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput, TrafficSourceBmUncheckedUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput>
  }

  export type TrafficSourceBmUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUpdateManyWithoutTrafficSourceBmNestedInput
    accountsOwned?: TrafficSourceAccountUpdateManyWithoutTrafficSourceOwnerBmNestedInput
  }

  export type TrafficSourceBmUncheckedUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUncheckedUpdateManyWithoutTrafficSourceBmNestedInput
    accountsOwned?: TrafficSourceAccountUncheckedUpdateManyWithoutTrafficSourceOwnerBmNestedInput
  }

  export type ApiAccessUpsertWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    update: XOR<ApiAccessUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput, ApiAccessUncheckedUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput>
    create: XOR<ApiAccessCreateWithoutTrafficSourceBmToApiAccessConnectionsInput, ApiAccessUncheckedCreateWithoutTrafficSourceBmToApiAccessConnectionsInput>
    where?: ApiAccessWhereInput
  }

  export type ApiAccessUpdateToOneWithWhereWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    where?: ApiAccessWhereInput
    data: XOR<ApiAccessUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput, ApiAccessUncheckedUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput>
  }

  export type ApiAccessUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: NullableEnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType | null
    apiAccessType?: EnumApiAccessTypeFieldUpdateOperationsInput | $Enums.ApiAccessType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    secondAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiAccessUncheckedUpdateWithoutTrafficSourceBmToApiAccessConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: NullableEnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType | null
    apiAccessType?: EnumApiAccessTypeFieldUpdateOperationsInput | $Enums.ApiAccessType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    secondAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrafficSourceAccountCreateWithoutTrafficSourceDailyAdStatsInput = {
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    externalStatus: string
    externalCreatedTime: Date | string
    status?: $Enums.TrafficSourceAccountStatus | null
    balance: Decimal | DecimalJsLike | number | string
    externalCurrency: string
    externalTimezone: string
    spendCap: Decimal | DecimalJsLike | number | string
    amountSpent: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    trafficSourceOwnerBm?: TrafficSourceBmCreateNestedOneWithoutAccountsOwnedInput
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmCreateNestedManyWithoutTrafficSourceAccountInput
  }

  export type TrafficSourceAccountUncheckedCreateWithoutTrafficSourceDailyAdStatsInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    externalStatus: string
    externalCreatedTime: Date | string
    status?: $Enums.TrafficSourceAccountStatus | null
    balance: Decimal | DecimalJsLike | number | string
    externalCurrency: string
    externalTimezone: string
    spendCap: Decimal | DecimalJsLike | number | string
    amountSpent: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    trafficSourceOwnerBmId?: number | null
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUncheckedCreateNestedManyWithoutTrafficSourceAccountInput
  }

  export type TrafficSourceAccountCreateOrConnectWithoutTrafficSourceDailyAdStatsInput = {
    where: TrafficSourceAccountWhereUniqueInput
    create: XOR<TrafficSourceAccountCreateWithoutTrafficSourceDailyAdStatsInput, TrafficSourceAccountUncheckedCreateWithoutTrafficSourceDailyAdStatsInput>
  }

  export type TrafficSourceAccountUpsertWithoutTrafficSourceDailyAdStatsInput = {
    update: XOR<TrafficSourceAccountUpdateWithoutTrafficSourceDailyAdStatsInput, TrafficSourceAccountUncheckedUpdateWithoutTrafficSourceDailyAdStatsInput>
    create: XOR<TrafficSourceAccountCreateWithoutTrafficSourceDailyAdStatsInput, TrafficSourceAccountUncheckedCreateWithoutTrafficSourceDailyAdStatsInput>
    where?: TrafficSourceAccountWhereInput
  }

  export type TrafficSourceAccountUpdateToOneWithWhereWithoutTrafficSourceDailyAdStatsInput = {
    where?: TrafficSourceAccountWhereInput
    data: XOR<TrafficSourceAccountUpdateWithoutTrafficSourceDailyAdStatsInput, TrafficSourceAccountUncheckedUpdateWithoutTrafficSourceDailyAdStatsInput>
  }

  export type TrafficSourceAccountUpdateWithoutTrafficSourceDailyAdStatsInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalStatus?: StringFieldUpdateOperationsInput | string
    externalCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableEnumTrafficSourceAccountStatusFieldUpdateOperationsInput | $Enums.TrafficSourceAccountStatus | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalCurrency?: StringFieldUpdateOperationsInput | string
    externalTimezone?: StringFieldUpdateOperationsInput | string
    spendCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceOwnerBm?: TrafficSourceBmUpdateOneWithoutAccountsOwnedNestedInput
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUpdateManyWithoutTrafficSourceAccountNestedInput
  }

  export type TrafficSourceAccountUncheckedUpdateWithoutTrafficSourceDailyAdStatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalStatus?: StringFieldUpdateOperationsInput | string
    externalCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableEnumTrafficSourceAccountStatusFieldUpdateOperationsInput | $Enums.TrafficSourceAccountStatus | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalCurrency?: StringFieldUpdateOperationsInput | string
    externalTimezone?: StringFieldUpdateOperationsInput | string
    spendCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceOwnerBmId?: NullableIntFieldUpdateOperationsInput | number | null
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUncheckedUpdateManyWithoutTrafficSourceAccountNestedInput
  }

  export type TrafficSourceBmToApiAccessCreateManyApiAccessInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceBmId: number
  }

  export type TrafficSourceBmToApiAccessUpdateWithoutApiAccessInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceBm?: TrafficSourceBmUpdateOneRequiredWithoutTrafficSourceBmToApiAccessConnectionsNestedInput
  }

  export type TrafficSourceBmToApiAccessUncheckedUpdateWithoutApiAccessInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceBmId?: IntFieldUpdateOperationsInput | number
  }

  export type TrafficSourceBmToApiAccessUncheckedUpdateManyWithoutApiAccessInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceBmId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateManyTaskLoopInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    type: $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.TaskStatus
    result?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startTime?: Date | string | null
    endTime?: Date | string | null
  }

  export type TaskUpdateWithoutTaskLoopInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    result?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateWithoutTaskLoopInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    result?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyWithoutTaskLoopInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    payload?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    result?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceAccountInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceBmId: number
  }

  export type TrafficSourceDailyAdStatCreateManyTrafficSourceAccountInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    spend: Decimal | DecimalJsLike | number | string
    clicks: number
    externalAdId: string
    externalAdSetId: string
    externalCampaignId: string
    impressions: number
    externalDateStart: Date | string
    externalDateStop: Date | string
    trafficSourceType: $Enums.TrafficSourceType
  }

  export type TrafficSourceAccountToTrafficSourceBmUpdateWithoutTrafficSourceAccountInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceBm?: TrafficSourceBmUpdateOneRequiredWithoutTrafficSourceAccountToTrafficSourceBmConnectionsNestedInput
  }

  export type TrafficSourceAccountToTrafficSourceBmUncheckedUpdateWithoutTrafficSourceAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceBmId?: IntFieldUpdateOperationsInput | number
  }

  export type TrafficSourceAccountToTrafficSourceBmUncheckedUpdateManyWithoutTrafficSourceAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceBmId?: IntFieldUpdateOperationsInput | number
  }

  export type TrafficSourceDailyAdStatUpdateWithoutTrafficSourceAccountInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clicks?: IntFieldUpdateOperationsInput | number
    externalAdId?: StringFieldUpdateOperationsInput | string
    externalAdSetId?: StringFieldUpdateOperationsInput | string
    externalCampaignId?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    externalDateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    externalDateStop?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
  }

  export type TrafficSourceDailyAdStatUncheckedUpdateWithoutTrafficSourceAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clicks?: IntFieldUpdateOperationsInput | number
    externalAdId?: StringFieldUpdateOperationsInput | string
    externalAdSetId?: StringFieldUpdateOperationsInput | string
    externalCampaignId?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    externalDateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    externalDateStop?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
  }

  export type TrafficSourceDailyAdStatUncheckedUpdateManyWithoutTrafficSourceAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clicks?: IntFieldUpdateOperationsInput | number
    externalAdId?: StringFieldUpdateOperationsInput | string
    externalAdSetId?: StringFieldUpdateOperationsInput | string
    externalCampaignId?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    externalDateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    externalDateStop?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
  }

  export type TrafficSourceBmToApiAccessCreateManyTrafficSourceBmInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    apiAccessId: number
  }

  export type TrafficSourceAccountToTrafficSourceBmCreateManyTrafficSourceBmInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceAccountId: number
  }

  export type TrafficSourceAccountCreateManyTrafficSourceOwnerBmInput = {
    id?: number
    createDate?: Date | string
    updateDate?: Date | string
    trafficSourceType: $Enums.TrafficSourceType
    externalId: string
    name: string
    externalStatus: string
    externalCreatedTime: Date | string
    status?: $Enums.TrafficSourceAccountStatus | null
    balance: Decimal | DecimalJsLike | number | string
    externalCurrency: string
    externalTimezone: string
    spendCap: Decimal | DecimalJsLike | number | string
    amountSpent: Decimal | DecimalJsLike | number | string
    isActive?: boolean
  }

  export type TrafficSourceBmToApiAccessUpdateWithoutTrafficSourceBmInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    apiAccess?: ApiAccessUpdateOneRequiredWithoutTrafficSourceBmToApiAccessConnectionsNestedInput
  }

  export type TrafficSourceBmToApiAccessUncheckedUpdateWithoutTrafficSourceBmInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    apiAccessId?: IntFieldUpdateOperationsInput | number
  }

  export type TrafficSourceBmToApiAccessUncheckedUpdateManyWithoutTrafficSourceBmInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    apiAccessId?: IntFieldUpdateOperationsInput | number
  }

  export type TrafficSourceAccountToTrafficSourceBmUpdateWithoutTrafficSourceBmInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceAccount?: TrafficSourceAccountUpdateOneRequiredWithoutTrafficSourceAccountToTrafficSourceBmConnectionsNestedInput
  }

  export type TrafficSourceAccountToTrafficSourceBmUncheckedUpdateWithoutTrafficSourceBmInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceAccountId?: IntFieldUpdateOperationsInput | number
  }

  export type TrafficSourceAccountToTrafficSourceBmUncheckedUpdateManyWithoutTrafficSourceBmInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceAccountId?: IntFieldUpdateOperationsInput | number
  }

  export type TrafficSourceAccountUpdateWithoutTrafficSourceOwnerBmInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalStatus?: StringFieldUpdateOperationsInput | string
    externalCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableEnumTrafficSourceAccountStatusFieldUpdateOperationsInput | $Enums.TrafficSourceAccountStatus | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalCurrency?: StringFieldUpdateOperationsInput | string
    externalTimezone?: StringFieldUpdateOperationsInput | string
    spendCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUpdateManyWithoutTrafficSourceAccountNestedInput
    trafficSourceDailyAdStats?: TrafficSourceDailyAdStatUpdateManyWithoutTrafficSourceAccountNestedInput
  }

  export type TrafficSourceAccountUncheckedUpdateWithoutTrafficSourceOwnerBmInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalStatus?: StringFieldUpdateOperationsInput | string
    externalCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableEnumTrafficSourceAccountStatusFieldUpdateOperationsInput | $Enums.TrafficSourceAccountStatus | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalCurrency?: StringFieldUpdateOperationsInput | string
    externalTimezone?: StringFieldUpdateOperationsInput | string
    spendCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trafficSourceAccountToTrafficSourceBmConnections?: TrafficSourceAccountToTrafficSourceBmUncheckedUpdateManyWithoutTrafficSourceAccountNestedInput
    trafficSourceDailyAdStats?: TrafficSourceDailyAdStatUncheckedUpdateManyWithoutTrafficSourceAccountNestedInput
  }

  export type TrafficSourceAccountUncheckedUpdateManyWithoutTrafficSourceOwnerBmInput = {
    id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSourceType?: EnumTrafficSourceTypeFieldUpdateOperationsInput | $Enums.TrafficSourceType
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalStatus?: StringFieldUpdateOperationsInput | string
    externalCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableEnumTrafficSourceAccountStatusFieldUpdateOperationsInput | $Enums.TrafficSourceAccountStatus | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalCurrency?: StringFieldUpdateOperationsInput | string
    externalTimezone?: StringFieldUpdateOperationsInput | string
    spendCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}