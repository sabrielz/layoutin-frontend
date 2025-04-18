
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PrintingJob
 * 
 */
export type PrintingJob = $Result.DefaultSelection<Prisma.$PrintingJobPayload>
/**
 * Model Pricing
 * 
 */
export type Pricing = $Result.DefaultSelection<Prisma.$PricingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PrintingJobs
 * const printingJobs = await prisma.printingJob.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more PrintingJobs
   * const printingJobs = await prisma.printingJob.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.printingJob`: Exposes CRUD operations for the **PrintingJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrintingJobs
    * const printingJobs = await prisma.printingJob.findMany()
    * ```
    */
  get printingJob(): Prisma.PrintingJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pricing`: Exposes CRUD operations for the **Pricing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pricings
    * const pricings = await prisma.pricing.findMany()
    * ```
    */
  get pricing(): Prisma.PricingDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    PrintingJob: 'PrintingJob',
    Pricing: 'Pricing'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "printingJob" | "pricing"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PrintingJob: {
        payload: Prisma.$PrintingJobPayload<ExtArgs>
        fields: Prisma.PrintingJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrintingJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintingJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrintingJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintingJobPayload>
          }
          findFirst: {
            args: Prisma.PrintingJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintingJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrintingJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintingJobPayload>
          }
          findMany: {
            args: Prisma.PrintingJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintingJobPayload>[]
          }
          create: {
            args: Prisma.PrintingJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintingJobPayload>
          }
          createMany: {
            args: Prisma.PrintingJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PrintingJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintingJobPayload>
          }
          update: {
            args: Prisma.PrintingJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintingJobPayload>
          }
          deleteMany: {
            args: Prisma.PrintingJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrintingJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrintingJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintingJobPayload>
          }
          aggregate: {
            args: Prisma.PrintingJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrintingJob>
          }
          groupBy: {
            args: Prisma.PrintingJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrintingJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrintingJobCountArgs<ExtArgs>
            result: $Utils.Optional<PrintingJobCountAggregateOutputType> | number
          }
        }
      }
      Pricing: {
        payload: Prisma.$PricingPayload<ExtArgs>
        fields: Prisma.PricingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>
          }
          findFirst: {
            args: Prisma.PricingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>
          }
          findMany: {
            args: Prisma.PricingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>[]
          }
          create: {
            args: Prisma.PricingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>
          }
          createMany: {
            args: Prisma.PricingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PricingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>
          }
          update: {
            args: Prisma.PricingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>
          }
          deleteMany: {
            args: Prisma.PricingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PricingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>
          }
          aggregate: {
            args: Prisma.PricingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricing>
          }
          groupBy: {
            args: Prisma.PricingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingCountArgs<ExtArgs>
            result: $Utils.Optional<PricingCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    printingJob?: PrintingJobOmit
    pricing?: PricingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model PrintingJob
   */

  export type AggregatePrintingJob = {
    _count: PrintingJobCountAggregateOutputType | null
    _avg: PrintingJobAvgAggregateOutputType | null
    _sum: PrintingJobSumAggregateOutputType | null
    _min: PrintingJobMinAggregateOutputType | null
    _max: PrintingJobMaxAggregateOutputType | null
  }

  export type PrintingJobAvgAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    quantity: number | null
    totalPrice: number | null
  }

  export type PrintingJobSumAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    quantity: number | null
    totalPrice: number | null
  }

  export type PrintingJobMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    paperType: string | null
    width: number | null
    height: number | null
    quantity: number | null
    isCutting: boolean | null
    isDesign: boolean | null
    fileName: string | null
    totalPrice: number | null
    pdfUrl: string | null
    status: string | null
  }

  export type PrintingJobMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    paperType: string | null
    width: number | null
    height: number | null
    quantity: number | null
    isCutting: boolean | null
    isDesign: boolean | null
    fileName: string | null
    totalPrice: number | null
    pdfUrl: string | null
    status: string | null
  }

  export type PrintingJobCountAggregateOutputType = {
    id: number
    createdAt: number
    paperType: number
    width: number
    height: number
    quantity: number
    isCutting: number
    isDesign: number
    fileName: number
    totalPrice: number
    pdfUrl: number
    status: number
    _all: number
  }


  export type PrintingJobAvgAggregateInputType = {
    id?: true
    width?: true
    height?: true
    quantity?: true
    totalPrice?: true
  }

  export type PrintingJobSumAggregateInputType = {
    id?: true
    width?: true
    height?: true
    quantity?: true
    totalPrice?: true
  }

  export type PrintingJobMinAggregateInputType = {
    id?: true
    createdAt?: true
    paperType?: true
    width?: true
    height?: true
    quantity?: true
    isCutting?: true
    isDesign?: true
    fileName?: true
    totalPrice?: true
    pdfUrl?: true
    status?: true
  }

  export type PrintingJobMaxAggregateInputType = {
    id?: true
    createdAt?: true
    paperType?: true
    width?: true
    height?: true
    quantity?: true
    isCutting?: true
    isDesign?: true
    fileName?: true
    totalPrice?: true
    pdfUrl?: true
    status?: true
  }

  export type PrintingJobCountAggregateInputType = {
    id?: true
    createdAt?: true
    paperType?: true
    width?: true
    height?: true
    quantity?: true
    isCutting?: true
    isDesign?: true
    fileName?: true
    totalPrice?: true
    pdfUrl?: true
    status?: true
    _all?: true
  }

  export type PrintingJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrintingJob to aggregate.
     */
    where?: PrintingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrintingJobs to fetch.
     */
    orderBy?: PrintingJobOrderByWithRelationInput | PrintingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrintingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrintingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrintingJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrintingJobs
    **/
    _count?: true | PrintingJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrintingJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrintingJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrintingJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrintingJobMaxAggregateInputType
  }

  export type GetPrintingJobAggregateType<T extends PrintingJobAggregateArgs> = {
        [P in keyof T & keyof AggregatePrintingJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrintingJob[P]>
      : GetScalarType<T[P], AggregatePrintingJob[P]>
  }




  export type PrintingJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrintingJobWhereInput
    orderBy?: PrintingJobOrderByWithAggregationInput | PrintingJobOrderByWithAggregationInput[]
    by: PrintingJobScalarFieldEnum[] | PrintingJobScalarFieldEnum
    having?: PrintingJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrintingJobCountAggregateInputType | true
    _avg?: PrintingJobAvgAggregateInputType
    _sum?: PrintingJobSumAggregateInputType
    _min?: PrintingJobMinAggregateInputType
    _max?: PrintingJobMaxAggregateInputType
  }

  export type PrintingJobGroupByOutputType = {
    id: number
    createdAt: Date
    paperType: string
    width: number
    height: number
    quantity: number
    isCutting: boolean
    isDesign: boolean
    fileName: string | null
    totalPrice: number
    pdfUrl: string | null
    status: string
    _count: PrintingJobCountAggregateOutputType | null
    _avg: PrintingJobAvgAggregateOutputType | null
    _sum: PrintingJobSumAggregateOutputType | null
    _min: PrintingJobMinAggregateOutputType | null
    _max: PrintingJobMaxAggregateOutputType | null
  }

  type GetPrintingJobGroupByPayload<T extends PrintingJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrintingJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrintingJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrintingJobGroupByOutputType[P]>
            : GetScalarType<T[P], PrintingJobGroupByOutputType[P]>
        }
      >
    >


  export type PrintingJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    paperType?: boolean
    width?: boolean
    height?: boolean
    quantity?: boolean
    isCutting?: boolean
    isDesign?: boolean
    fileName?: boolean
    totalPrice?: boolean
    pdfUrl?: boolean
    status?: boolean
  }, ExtArgs["result"]["printingJob"]>



  export type PrintingJobSelectScalar = {
    id?: boolean
    createdAt?: boolean
    paperType?: boolean
    width?: boolean
    height?: boolean
    quantity?: boolean
    isCutting?: boolean
    isDesign?: boolean
    fileName?: boolean
    totalPrice?: boolean
    pdfUrl?: boolean
    status?: boolean
  }

  export type PrintingJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "paperType" | "width" | "height" | "quantity" | "isCutting" | "isDesign" | "fileName" | "totalPrice" | "pdfUrl" | "status", ExtArgs["result"]["printingJob"]>

  export type $PrintingJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrintingJob"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      paperType: string
      width: number
      height: number
      quantity: number
      isCutting: boolean
      isDesign: boolean
      fileName: string | null
      totalPrice: number
      pdfUrl: string | null
      status: string
    }, ExtArgs["result"]["printingJob"]>
    composites: {}
  }

  type PrintingJobGetPayload<S extends boolean | null | undefined | PrintingJobDefaultArgs> = $Result.GetResult<Prisma.$PrintingJobPayload, S>

  type PrintingJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrintingJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrintingJobCountAggregateInputType | true
    }

  export interface PrintingJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrintingJob'], meta: { name: 'PrintingJob' } }
    /**
     * Find zero or one PrintingJob that matches the filter.
     * @param {PrintingJobFindUniqueArgs} args - Arguments to find a PrintingJob
     * @example
     * // Get one PrintingJob
     * const printingJob = await prisma.printingJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrintingJobFindUniqueArgs>(args: SelectSubset<T, PrintingJobFindUniqueArgs<ExtArgs>>): Prisma__PrintingJobClient<$Result.GetResult<Prisma.$PrintingJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrintingJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrintingJobFindUniqueOrThrowArgs} args - Arguments to find a PrintingJob
     * @example
     * // Get one PrintingJob
     * const printingJob = await prisma.printingJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrintingJobFindUniqueOrThrowArgs>(args: SelectSubset<T, PrintingJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrintingJobClient<$Result.GetResult<Prisma.$PrintingJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrintingJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintingJobFindFirstArgs} args - Arguments to find a PrintingJob
     * @example
     * // Get one PrintingJob
     * const printingJob = await prisma.printingJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrintingJobFindFirstArgs>(args?: SelectSubset<T, PrintingJobFindFirstArgs<ExtArgs>>): Prisma__PrintingJobClient<$Result.GetResult<Prisma.$PrintingJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrintingJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintingJobFindFirstOrThrowArgs} args - Arguments to find a PrintingJob
     * @example
     * // Get one PrintingJob
     * const printingJob = await prisma.printingJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrintingJobFindFirstOrThrowArgs>(args?: SelectSubset<T, PrintingJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrintingJobClient<$Result.GetResult<Prisma.$PrintingJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrintingJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintingJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrintingJobs
     * const printingJobs = await prisma.printingJob.findMany()
     * 
     * // Get first 10 PrintingJobs
     * const printingJobs = await prisma.printingJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const printingJobWithIdOnly = await prisma.printingJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrintingJobFindManyArgs>(args?: SelectSubset<T, PrintingJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrintingJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrintingJob.
     * @param {PrintingJobCreateArgs} args - Arguments to create a PrintingJob.
     * @example
     * // Create one PrintingJob
     * const PrintingJob = await prisma.printingJob.create({
     *   data: {
     *     // ... data to create a PrintingJob
     *   }
     * })
     * 
     */
    create<T extends PrintingJobCreateArgs>(args: SelectSubset<T, PrintingJobCreateArgs<ExtArgs>>): Prisma__PrintingJobClient<$Result.GetResult<Prisma.$PrintingJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrintingJobs.
     * @param {PrintingJobCreateManyArgs} args - Arguments to create many PrintingJobs.
     * @example
     * // Create many PrintingJobs
     * const printingJob = await prisma.printingJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrintingJobCreateManyArgs>(args?: SelectSubset<T, PrintingJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PrintingJob.
     * @param {PrintingJobDeleteArgs} args - Arguments to delete one PrintingJob.
     * @example
     * // Delete one PrintingJob
     * const PrintingJob = await prisma.printingJob.delete({
     *   where: {
     *     // ... filter to delete one PrintingJob
     *   }
     * })
     * 
     */
    delete<T extends PrintingJobDeleteArgs>(args: SelectSubset<T, PrintingJobDeleteArgs<ExtArgs>>): Prisma__PrintingJobClient<$Result.GetResult<Prisma.$PrintingJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrintingJob.
     * @param {PrintingJobUpdateArgs} args - Arguments to update one PrintingJob.
     * @example
     * // Update one PrintingJob
     * const printingJob = await prisma.printingJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrintingJobUpdateArgs>(args: SelectSubset<T, PrintingJobUpdateArgs<ExtArgs>>): Prisma__PrintingJobClient<$Result.GetResult<Prisma.$PrintingJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrintingJobs.
     * @param {PrintingJobDeleteManyArgs} args - Arguments to filter PrintingJobs to delete.
     * @example
     * // Delete a few PrintingJobs
     * const { count } = await prisma.printingJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrintingJobDeleteManyArgs>(args?: SelectSubset<T, PrintingJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrintingJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintingJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrintingJobs
     * const printingJob = await prisma.printingJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrintingJobUpdateManyArgs>(args: SelectSubset<T, PrintingJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PrintingJob.
     * @param {PrintingJobUpsertArgs} args - Arguments to update or create a PrintingJob.
     * @example
     * // Update or create a PrintingJob
     * const printingJob = await prisma.printingJob.upsert({
     *   create: {
     *     // ... data to create a PrintingJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrintingJob we want to update
     *   }
     * })
     */
    upsert<T extends PrintingJobUpsertArgs>(args: SelectSubset<T, PrintingJobUpsertArgs<ExtArgs>>): Prisma__PrintingJobClient<$Result.GetResult<Prisma.$PrintingJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrintingJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintingJobCountArgs} args - Arguments to filter PrintingJobs to count.
     * @example
     * // Count the number of PrintingJobs
     * const count = await prisma.printingJob.count({
     *   where: {
     *     // ... the filter for the PrintingJobs we want to count
     *   }
     * })
    **/
    count<T extends PrintingJobCountArgs>(
      args?: Subset<T, PrintingJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrintingJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrintingJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintingJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrintingJobAggregateArgs>(args: Subset<T, PrintingJobAggregateArgs>): Prisma.PrismaPromise<GetPrintingJobAggregateType<T>>

    /**
     * Group by PrintingJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintingJobGroupByArgs} args - Group by arguments.
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
      T extends PrintingJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrintingJobGroupByArgs['orderBy'] }
        : { orderBy?: PrintingJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrintingJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrintingJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrintingJob model
   */
  readonly fields: PrintingJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrintingJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrintingJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PrintingJob model
   */
  interface PrintingJobFieldRefs {
    readonly id: FieldRef<"PrintingJob", 'Int'>
    readonly createdAt: FieldRef<"PrintingJob", 'DateTime'>
    readonly paperType: FieldRef<"PrintingJob", 'String'>
    readonly width: FieldRef<"PrintingJob", 'Float'>
    readonly height: FieldRef<"PrintingJob", 'Float'>
    readonly quantity: FieldRef<"PrintingJob", 'Int'>
    readonly isCutting: FieldRef<"PrintingJob", 'Boolean'>
    readonly isDesign: FieldRef<"PrintingJob", 'Boolean'>
    readonly fileName: FieldRef<"PrintingJob", 'String'>
    readonly totalPrice: FieldRef<"PrintingJob", 'Float'>
    readonly pdfUrl: FieldRef<"PrintingJob", 'String'>
    readonly status: FieldRef<"PrintingJob", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PrintingJob findUnique
   */
  export type PrintingJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintingJob
     */
    select?: PrintingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintingJob
     */
    omit?: PrintingJobOmit<ExtArgs> | null
    /**
     * Filter, which PrintingJob to fetch.
     */
    where: PrintingJobWhereUniqueInput
  }

  /**
   * PrintingJob findUniqueOrThrow
   */
  export type PrintingJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintingJob
     */
    select?: PrintingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintingJob
     */
    omit?: PrintingJobOmit<ExtArgs> | null
    /**
     * Filter, which PrintingJob to fetch.
     */
    where: PrintingJobWhereUniqueInput
  }

  /**
   * PrintingJob findFirst
   */
  export type PrintingJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintingJob
     */
    select?: PrintingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintingJob
     */
    omit?: PrintingJobOmit<ExtArgs> | null
    /**
     * Filter, which PrintingJob to fetch.
     */
    where?: PrintingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrintingJobs to fetch.
     */
    orderBy?: PrintingJobOrderByWithRelationInput | PrintingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrintingJobs.
     */
    cursor?: PrintingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrintingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrintingJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrintingJobs.
     */
    distinct?: PrintingJobScalarFieldEnum | PrintingJobScalarFieldEnum[]
  }

  /**
   * PrintingJob findFirstOrThrow
   */
  export type PrintingJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintingJob
     */
    select?: PrintingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintingJob
     */
    omit?: PrintingJobOmit<ExtArgs> | null
    /**
     * Filter, which PrintingJob to fetch.
     */
    where?: PrintingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrintingJobs to fetch.
     */
    orderBy?: PrintingJobOrderByWithRelationInput | PrintingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrintingJobs.
     */
    cursor?: PrintingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrintingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrintingJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrintingJobs.
     */
    distinct?: PrintingJobScalarFieldEnum | PrintingJobScalarFieldEnum[]
  }

  /**
   * PrintingJob findMany
   */
  export type PrintingJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintingJob
     */
    select?: PrintingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintingJob
     */
    omit?: PrintingJobOmit<ExtArgs> | null
    /**
     * Filter, which PrintingJobs to fetch.
     */
    where?: PrintingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrintingJobs to fetch.
     */
    orderBy?: PrintingJobOrderByWithRelationInput | PrintingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrintingJobs.
     */
    cursor?: PrintingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrintingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrintingJobs.
     */
    skip?: number
    distinct?: PrintingJobScalarFieldEnum | PrintingJobScalarFieldEnum[]
  }

  /**
   * PrintingJob create
   */
  export type PrintingJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintingJob
     */
    select?: PrintingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintingJob
     */
    omit?: PrintingJobOmit<ExtArgs> | null
    /**
     * The data needed to create a PrintingJob.
     */
    data: XOR<PrintingJobCreateInput, PrintingJobUncheckedCreateInput>
  }

  /**
   * PrintingJob createMany
   */
  export type PrintingJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrintingJobs.
     */
    data: PrintingJobCreateManyInput | PrintingJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrintingJob update
   */
  export type PrintingJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintingJob
     */
    select?: PrintingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintingJob
     */
    omit?: PrintingJobOmit<ExtArgs> | null
    /**
     * The data needed to update a PrintingJob.
     */
    data: XOR<PrintingJobUpdateInput, PrintingJobUncheckedUpdateInput>
    /**
     * Choose, which PrintingJob to update.
     */
    where: PrintingJobWhereUniqueInput
  }

  /**
   * PrintingJob updateMany
   */
  export type PrintingJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrintingJobs.
     */
    data: XOR<PrintingJobUpdateManyMutationInput, PrintingJobUncheckedUpdateManyInput>
    /**
     * Filter which PrintingJobs to update
     */
    where?: PrintingJobWhereInput
    /**
     * Limit how many PrintingJobs to update.
     */
    limit?: number
  }

  /**
   * PrintingJob upsert
   */
  export type PrintingJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintingJob
     */
    select?: PrintingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintingJob
     */
    omit?: PrintingJobOmit<ExtArgs> | null
    /**
     * The filter to search for the PrintingJob to update in case it exists.
     */
    where: PrintingJobWhereUniqueInput
    /**
     * In case the PrintingJob found by the `where` argument doesn't exist, create a new PrintingJob with this data.
     */
    create: XOR<PrintingJobCreateInput, PrintingJobUncheckedCreateInput>
    /**
     * In case the PrintingJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrintingJobUpdateInput, PrintingJobUncheckedUpdateInput>
  }

  /**
   * PrintingJob delete
   */
  export type PrintingJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintingJob
     */
    select?: PrintingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintingJob
     */
    omit?: PrintingJobOmit<ExtArgs> | null
    /**
     * Filter which PrintingJob to delete.
     */
    where: PrintingJobWhereUniqueInput
  }

  /**
   * PrintingJob deleteMany
   */
  export type PrintingJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrintingJobs to delete
     */
    where?: PrintingJobWhereInput
    /**
     * Limit how many PrintingJobs to delete.
     */
    limit?: number
  }

  /**
   * PrintingJob without action
   */
  export type PrintingJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintingJob
     */
    select?: PrintingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintingJob
     */
    omit?: PrintingJobOmit<ExtArgs> | null
  }


  /**
   * Model Pricing
   */

  export type AggregatePricing = {
    _count: PricingCountAggregateOutputType | null
    _avg: PricingAvgAggregateOutputType | null
    _sum: PricingSumAggregateOutputType | null
    _min: PricingMinAggregateOutputType | null
    _max: PricingMaxAggregateOutputType | null
  }

  export type PricingAvgAggregateOutputType = {
    id: number | null
    range1_2: number | null
    range3_19: number | null
    range20_59: number | null
    range60_99: number | null
    range100: number | null
    cuttingCost: number | null
    designCost: number | null
  }

  export type PricingSumAggregateOutputType = {
    id: number | null
    range1_2: number | null
    range3_19: number | null
    range20_59: number | null
    range60_99: number | null
    range100: number | null
    cuttingCost: number | null
    designCost: number | null
  }

  export type PricingMinAggregateOutputType = {
    id: number | null
    paperType: string | null
    range1_2: number | null
    range3_19: number | null
    range20_59: number | null
    range60_99: number | null
    range100: number | null
    cuttingCost: number | null
    designCost: number | null
  }

  export type PricingMaxAggregateOutputType = {
    id: number | null
    paperType: string | null
    range1_2: number | null
    range3_19: number | null
    range20_59: number | null
    range60_99: number | null
    range100: number | null
    cuttingCost: number | null
    designCost: number | null
  }

  export type PricingCountAggregateOutputType = {
    id: number
    paperType: number
    range1_2: number
    range3_19: number
    range20_59: number
    range60_99: number
    range100: number
    cuttingCost: number
    designCost: number
    _all: number
  }


  export type PricingAvgAggregateInputType = {
    id?: true
    range1_2?: true
    range3_19?: true
    range20_59?: true
    range60_99?: true
    range100?: true
    cuttingCost?: true
    designCost?: true
  }

  export type PricingSumAggregateInputType = {
    id?: true
    range1_2?: true
    range3_19?: true
    range20_59?: true
    range60_99?: true
    range100?: true
    cuttingCost?: true
    designCost?: true
  }

  export type PricingMinAggregateInputType = {
    id?: true
    paperType?: true
    range1_2?: true
    range3_19?: true
    range20_59?: true
    range60_99?: true
    range100?: true
    cuttingCost?: true
    designCost?: true
  }

  export type PricingMaxAggregateInputType = {
    id?: true
    paperType?: true
    range1_2?: true
    range3_19?: true
    range20_59?: true
    range60_99?: true
    range100?: true
    cuttingCost?: true
    designCost?: true
  }

  export type PricingCountAggregateInputType = {
    id?: true
    paperType?: true
    range1_2?: true
    range3_19?: true
    range20_59?: true
    range60_99?: true
    range100?: true
    cuttingCost?: true
    designCost?: true
    _all?: true
  }

  export type PricingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pricing to aggregate.
     */
    where?: PricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pricings to fetch.
     */
    orderBy?: PricingOrderByWithRelationInput | PricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pricings
    **/
    _count?: true | PricingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingMaxAggregateInputType
  }

  export type GetPricingAggregateType<T extends PricingAggregateArgs> = {
        [P in keyof T & keyof AggregatePricing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricing[P]>
      : GetScalarType<T[P], AggregatePricing[P]>
  }




  export type PricingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingWhereInput
    orderBy?: PricingOrderByWithAggregationInput | PricingOrderByWithAggregationInput[]
    by: PricingScalarFieldEnum[] | PricingScalarFieldEnum
    having?: PricingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingCountAggregateInputType | true
    _avg?: PricingAvgAggregateInputType
    _sum?: PricingSumAggregateInputType
    _min?: PricingMinAggregateInputType
    _max?: PricingMaxAggregateInputType
  }

  export type PricingGroupByOutputType = {
    id: number
    paperType: string
    range1_2: number
    range3_19: number
    range20_59: number
    range60_99: number
    range100: number
    cuttingCost: number
    designCost: number
    _count: PricingCountAggregateOutputType | null
    _avg: PricingAvgAggregateOutputType | null
    _sum: PricingSumAggregateOutputType | null
    _min: PricingMinAggregateOutputType | null
    _max: PricingMaxAggregateOutputType | null
  }

  type GetPricingGroupByPayload<T extends PricingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingGroupByOutputType[P]>
            : GetScalarType<T[P], PricingGroupByOutputType[P]>
        }
      >
    >


  export type PricingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paperType?: boolean
    range1_2?: boolean
    range3_19?: boolean
    range20_59?: boolean
    range60_99?: boolean
    range100?: boolean
    cuttingCost?: boolean
    designCost?: boolean
  }, ExtArgs["result"]["pricing"]>



  export type PricingSelectScalar = {
    id?: boolean
    paperType?: boolean
    range1_2?: boolean
    range3_19?: boolean
    range20_59?: boolean
    range60_99?: boolean
    range100?: boolean
    cuttingCost?: boolean
    designCost?: boolean
  }

  export type PricingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paperType" | "range1_2" | "range3_19" | "range20_59" | "range60_99" | "range100" | "cuttingCost" | "designCost", ExtArgs["result"]["pricing"]>

  export type $PricingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pricing"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paperType: string
      range1_2: number
      range3_19: number
      range20_59: number
      range60_99: number
      range100: number
      cuttingCost: number
      designCost: number
    }, ExtArgs["result"]["pricing"]>
    composites: {}
  }

  type PricingGetPayload<S extends boolean | null | undefined | PricingDefaultArgs> = $Result.GetResult<Prisma.$PricingPayload, S>

  type PricingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricingCountAggregateInputType | true
    }

  export interface PricingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pricing'], meta: { name: 'Pricing' } }
    /**
     * Find zero or one Pricing that matches the filter.
     * @param {PricingFindUniqueArgs} args - Arguments to find a Pricing
     * @example
     * // Get one Pricing
     * const pricing = await prisma.pricing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingFindUniqueArgs>(args: SelectSubset<T, PricingFindUniqueArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pricing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricingFindUniqueOrThrowArgs} args - Arguments to find a Pricing
     * @example
     * // Get one Pricing
     * const pricing = await prisma.pricing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pricing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingFindFirstArgs} args - Arguments to find a Pricing
     * @example
     * // Get one Pricing
     * const pricing = await prisma.pricing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingFindFirstArgs>(args?: SelectSubset<T, PricingFindFirstArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pricing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingFindFirstOrThrowArgs} args - Arguments to find a Pricing
     * @example
     * // Get one Pricing
     * const pricing = await prisma.pricing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pricings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pricings
     * const pricings = await prisma.pricing.findMany()
     * 
     * // Get first 10 Pricings
     * const pricings = await prisma.pricing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingWithIdOnly = await prisma.pricing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingFindManyArgs>(args?: SelectSubset<T, PricingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pricing.
     * @param {PricingCreateArgs} args - Arguments to create a Pricing.
     * @example
     * // Create one Pricing
     * const Pricing = await prisma.pricing.create({
     *   data: {
     *     // ... data to create a Pricing
     *   }
     * })
     * 
     */
    create<T extends PricingCreateArgs>(args: SelectSubset<T, PricingCreateArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pricings.
     * @param {PricingCreateManyArgs} args - Arguments to create many Pricings.
     * @example
     * // Create many Pricings
     * const pricing = await prisma.pricing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingCreateManyArgs>(args?: SelectSubset<T, PricingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pricing.
     * @param {PricingDeleteArgs} args - Arguments to delete one Pricing.
     * @example
     * // Delete one Pricing
     * const Pricing = await prisma.pricing.delete({
     *   where: {
     *     // ... filter to delete one Pricing
     *   }
     * })
     * 
     */
    delete<T extends PricingDeleteArgs>(args: SelectSubset<T, PricingDeleteArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pricing.
     * @param {PricingUpdateArgs} args - Arguments to update one Pricing.
     * @example
     * // Update one Pricing
     * const pricing = await prisma.pricing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingUpdateArgs>(args: SelectSubset<T, PricingUpdateArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pricings.
     * @param {PricingDeleteManyArgs} args - Arguments to filter Pricings to delete.
     * @example
     * // Delete a few Pricings
     * const { count } = await prisma.pricing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingDeleteManyArgs>(args?: SelectSubset<T, PricingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pricings
     * const pricing = await prisma.pricing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingUpdateManyArgs>(args: SelectSubset<T, PricingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pricing.
     * @param {PricingUpsertArgs} args - Arguments to update or create a Pricing.
     * @example
     * // Update or create a Pricing
     * const pricing = await prisma.pricing.upsert({
     *   create: {
     *     // ... data to create a Pricing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pricing we want to update
     *   }
     * })
     */
    upsert<T extends PricingUpsertArgs>(args: SelectSubset<T, PricingUpsertArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingCountArgs} args - Arguments to filter Pricings to count.
     * @example
     * // Count the number of Pricings
     * const count = await prisma.pricing.count({
     *   where: {
     *     // ... the filter for the Pricings we want to count
     *   }
     * })
    **/
    count<T extends PricingCountArgs>(
      args?: Subset<T, PricingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PricingAggregateArgs>(args: Subset<T, PricingAggregateArgs>): Prisma.PrismaPromise<GetPricingAggregateType<T>>

    /**
     * Group by Pricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingGroupByArgs} args - Group by arguments.
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
      T extends PricingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingGroupByArgs['orderBy'] }
        : { orderBy?: PricingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PricingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pricing model
   */
  readonly fields: PricingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pricing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Pricing model
   */
  interface PricingFieldRefs {
    readonly id: FieldRef<"Pricing", 'Int'>
    readonly paperType: FieldRef<"Pricing", 'String'>
    readonly range1_2: FieldRef<"Pricing", 'Float'>
    readonly range3_19: FieldRef<"Pricing", 'Float'>
    readonly range20_59: FieldRef<"Pricing", 'Float'>
    readonly range60_99: FieldRef<"Pricing", 'Float'>
    readonly range100: FieldRef<"Pricing", 'Float'>
    readonly cuttingCost: FieldRef<"Pricing", 'Float'>
    readonly designCost: FieldRef<"Pricing", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Pricing findUnique
   */
  export type PricingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Filter, which Pricing to fetch.
     */
    where: PricingWhereUniqueInput
  }

  /**
   * Pricing findUniqueOrThrow
   */
  export type PricingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Filter, which Pricing to fetch.
     */
    where: PricingWhereUniqueInput
  }

  /**
   * Pricing findFirst
   */
  export type PricingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Filter, which Pricing to fetch.
     */
    where?: PricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pricings to fetch.
     */
    orderBy?: PricingOrderByWithRelationInput | PricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pricings.
     */
    cursor?: PricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pricings.
     */
    distinct?: PricingScalarFieldEnum | PricingScalarFieldEnum[]
  }

  /**
   * Pricing findFirstOrThrow
   */
  export type PricingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Filter, which Pricing to fetch.
     */
    where?: PricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pricings to fetch.
     */
    orderBy?: PricingOrderByWithRelationInput | PricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pricings.
     */
    cursor?: PricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pricings.
     */
    distinct?: PricingScalarFieldEnum | PricingScalarFieldEnum[]
  }

  /**
   * Pricing findMany
   */
  export type PricingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Filter, which Pricings to fetch.
     */
    where?: PricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pricings to fetch.
     */
    orderBy?: PricingOrderByWithRelationInput | PricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pricings.
     */
    cursor?: PricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pricings.
     */
    skip?: number
    distinct?: PricingScalarFieldEnum | PricingScalarFieldEnum[]
  }

  /**
   * Pricing create
   */
  export type PricingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * The data needed to create a Pricing.
     */
    data: XOR<PricingCreateInput, PricingUncheckedCreateInput>
  }

  /**
   * Pricing createMany
   */
  export type PricingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pricings.
     */
    data: PricingCreateManyInput | PricingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pricing update
   */
  export type PricingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * The data needed to update a Pricing.
     */
    data: XOR<PricingUpdateInput, PricingUncheckedUpdateInput>
    /**
     * Choose, which Pricing to update.
     */
    where: PricingWhereUniqueInput
  }

  /**
   * Pricing updateMany
   */
  export type PricingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pricings.
     */
    data: XOR<PricingUpdateManyMutationInput, PricingUncheckedUpdateManyInput>
    /**
     * Filter which Pricings to update
     */
    where?: PricingWhereInput
    /**
     * Limit how many Pricings to update.
     */
    limit?: number
  }

  /**
   * Pricing upsert
   */
  export type PricingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * The filter to search for the Pricing to update in case it exists.
     */
    where: PricingWhereUniqueInput
    /**
     * In case the Pricing found by the `where` argument doesn't exist, create a new Pricing with this data.
     */
    create: XOR<PricingCreateInput, PricingUncheckedCreateInput>
    /**
     * In case the Pricing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingUpdateInput, PricingUncheckedUpdateInput>
  }

  /**
   * Pricing delete
   */
  export type PricingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Filter which Pricing to delete.
     */
    where: PricingWhereUniqueInput
  }

  /**
   * Pricing deleteMany
   */
  export type PricingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pricings to delete
     */
    where?: PricingWhereInput
    /**
     * Limit how many Pricings to delete.
     */
    limit?: number
  }

  /**
   * Pricing without action
   */
  export type PricingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
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


  export const PrintingJobScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    paperType: 'paperType',
    width: 'width',
    height: 'height',
    quantity: 'quantity',
    isCutting: 'isCutting',
    isDesign: 'isDesign',
    fileName: 'fileName',
    totalPrice: 'totalPrice',
    pdfUrl: 'pdfUrl',
    status: 'status'
  };

  export type PrintingJobScalarFieldEnum = (typeof PrintingJobScalarFieldEnum)[keyof typeof PrintingJobScalarFieldEnum]


  export const PricingScalarFieldEnum: {
    id: 'id',
    paperType: 'paperType',
    range1_2: 'range1_2',
    range3_19: 'range3_19',
    range20_59: 'range20_59',
    range60_99: 'range60_99',
    range100: 'range100',
    cuttingCost: 'cuttingCost',
    designCost: 'designCost'
  };

  export type PricingScalarFieldEnum = (typeof PricingScalarFieldEnum)[keyof typeof PricingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PrintingJobOrderByRelevanceFieldEnum: {
    paperType: 'paperType',
    fileName: 'fileName',
    pdfUrl: 'pdfUrl',
    status: 'status'
  };

  export type PrintingJobOrderByRelevanceFieldEnum = (typeof PrintingJobOrderByRelevanceFieldEnum)[keyof typeof PrintingJobOrderByRelevanceFieldEnum]


  export const PricingOrderByRelevanceFieldEnum: {
    paperType: 'paperType'
  };

  export type PricingOrderByRelevanceFieldEnum = (typeof PricingOrderByRelevanceFieldEnum)[keyof typeof PricingOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type PrintingJobWhereInput = {
    AND?: PrintingJobWhereInput | PrintingJobWhereInput[]
    OR?: PrintingJobWhereInput[]
    NOT?: PrintingJobWhereInput | PrintingJobWhereInput[]
    id?: IntFilter<"PrintingJob"> | number
    createdAt?: DateTimeFilter<"PrintingJob"> | Date | string
    paperType?: StringFilter<"PrintingJob"> | string
    width?: FloatFilter<"PrintingJob"> | number
    height?: FloatFilter<"PrintingJob"> | number
    quantity?: IntFilter<"PrintingJob"> | number
    isCutting?: BoolFilter<"PrintingJob"> | boolean
    isDesign?: BoolFilter<"PrintingJob"> | boolean
    fileName?: StringNullableFilter<"PrintingJob"> | string | null
    totalPrice?: FloatFilter<"PrintingJob"> | number
    pdfUrl?: StringNullableFilter<"PrintingJob"> | string | null
    status?: StringFilter<"PrintingJob"> | string
  }

  export type PrintingJobOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    paperType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    quantity?: SortOrder
    isCutting?: SortOrder
    isDesign?: SortOrder
    fileName?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    _relevance?: PrintingJobOrderByRelevanceInput
  }

  export type PrintingJobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrintingJobWhereInput | PrintingJobWhereInput[]
    OR?: PrintingJobWhereInput[]
    NOT?: PrintingJobWhereInput | PrintingJobWhereInput[]
    createdAt?: DateTimeFilter<"PrintingJob"> | Date | string
    paperType?: StringFilter<"PrintingJob"> | string
    width?: FloatFilter<"PrintingJob"> | number
    height?: FloatFilter<"PrintingJob"> | number
    quantity?: IntFilter<"PrintingJob"> | number
    isCutting?: BoolFilter<"PrintingJob"> | boolean
    isDesign?: BoolFilter<"PrintingJob"> | boolean
    fileName?: StringNullableFilter<"PrintingJob"> | string | null
    totalPrice?: FloatFilter<"PrintingJob"> | number
    pdfUrl?: StringNullableFilter<"PrintingJob"> | string | null
    status?: StringFilter<"PrintingJob"> | string
  }, "id">

  export type PrintingJobOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    paperType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    quantity?: SortOrder
    isCutting?: SortOrder
    isDesign?: SortOrder
    fileName?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: PrintingJobCountOrderByAggregateInput
    _avg?: PrintingJobAvgOrderByAggregateInput
    _max?: PrintingJobMaxOrderByAggregateInput
    _min?: PrintingJobMinOrderByAggregateInput
    _sum?: PrintingJobSumOrderByAggregateInput
  }

  export type PrintingJobScalarWhereWithAggregatesInput = {
    AND?: PrintingJobScalarWhereWithAggregatesInput | PrintingJobScalarWhereWithAggregatesInput[]
    OR?: PrintingJobScalarWhereWithAggregatesInput[]
    NOT?: PrintingJobScalarWhereWithAggregatesInput | PrintingJobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PrintingJob"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PrintingJob"> | Date | string
    paperType?: StringWithAggregatesFilter<"PrintingJob"> | string
    width?: FloatWithAggregatesFilter<"PrintingJob"> | number
    height?: FloatWithAggregatesFilter<"PrintingJob"> | number
    quantity?: IntWithAggregatesFilter<"PrintingJob"> | number
    isCutting?: BoolWithAggregatesFilter<"PrintingJob"> | boolean
    isDesign?: BoolWithAggregatesFilter<"PrintingJob"> | boolean
    fileName?: StringNullableWithAggregatesFilter<"PrintingJob"> | string | null
    totalPrice?: FloatWithAggregatesFilter<"PrintingJob"> | number
    pdfUrl?: StringNullableWithAggregatesFilter<"PrintingJob"> | string | null
    status?: StringWithAggregatesFilter<"PrintingJob"> | string
  }

  export type PricingWhereInput = {
    AND?: PricingWhereInput | PricingWhereInput[]
    OR?: PricingWhereInput[]
    NOT?: PricingWhereInput | PricingWhereInput[]
    id?: IntFilter<"Pricing"> | number
    paperType?: StringFilter<"Pricing"> | string
    range1_2?: FloatFilter<"Pricing"> | number
    range3_19?: FloatFilter<"Pricing"> | number
    range20_59?: FloatFilter<"Pricing"> | number
    range60_99?: FloatFilter<"Pricing"> | number
    range100?: FloatFilter<"Pricing"> | number
    cuttingCost?: FloatFilter<"Pricing"> | number
    designCost?: FloatFilter<"Pricing"> | number
  }

  export type PricingOrderByWithRelationInput = {
    id?: SortOrder
    paperType?: SortOrder
    range1_2?: SortOrder
    range3_19?: SortOrder
    range20_59?: SortOrder
    range60_99?: SortOrder
    range100?: SortOrder
    cuttingCost?: SortOrder
    designCost?: SortOrder
    _relevance?: PricingOrderByRelevanceInput
  }

  export type PricingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PricingWhereInput | PricingWhereInput[]
    OR?: PricingWhereInput[]
    NOT?: PricingWhereInput | PricingWhereInput[]
    paperType?: StringFilter<"Pricing"> | string
    range1_2?: FloatFilter<"Pricing"> | number
    range3_19?: FloatFilter<"Pricing"> | number
    range20_59?: FloatFilter<"Pricing"> | number
    range60_99?: FloatFilter<"Pricing"> | number
    range100?: FloatFilter<"Pricing"> | number
    cuttingCost?: FloatFilter<"Pricing"> | number
    designCost?: FloatFilter<"Pricing"> | number
  }, "id">

  export type PricingOrderByWithAggregationInput = {
    id?: SortOrder
    paperType?: SortOrder
    range1_2?: SortOrder
    range3_19?: SortOrder
    range20_59?: SortOrder
    range60_99?: SortOrder
    range100?: SortOrder
    cuttingCost?: SortOrder
    designCost?: SortOrder
    _count?: PricingCountOrderByAggregateInput
    _avg?: PricingAvgOrderByAggregateInput
    _max?: PricingMaxOrderByAggregateInput
    _min?: PricingMinOrderByAggregateInput
    _sum?: PricingSumOrderByAggregateInput
  }

  export type PricingScalarWhereWithAggregatesInput = {
    AND?: PricingScalarWhereWithAggregatesInput | PricingScalarWhereWithAggregatesInput[]
    OR?: PricingScalarWhereWithAggregatesInput[]
    NOT?: PricingScalarWhereWithAggregatesInput | PricingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pricing"> | number
    paperType?: StringWithAggregatesFilter<"Pricing"> | string
    range1_2?: FloatWithAggregatesFilter<"Pricing"> | number
    range3_19?: FloatWithAggregatesFilter<"Pricing"> | number
    range20_59?: FloatWithAggregatesFilter<"Pricing"> | number
    range60_99?: FloatWithAggregatesFilter<"Pricing"> | number
    range100?: FloatWithAggregatesFilter<"Pricing"> | number
    cuttingCost?: FloatWithAggregatesFilter<"Pricing"> | number
    designCost?: FloatWithAggregatesFilter<"Pricing"> | number
  }

  export type PrintingJobCreateInput = {
    createdAt?: Date | string
    paperType: string
    width: number
    height: number
    quantity: number
    isCutting: boolean
    isDesign: boolean
    fileName?: string | null
    totalPrice: number
    pdfUrl?: string | null
    status?: string
  }

  export type PrintingJobUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    paperType: string
    width: number
    height: number
    quantity: number
    isCutting: boolean
    isDesign: boolean
    fileName?: string | null
    totalPrice: number
    pdfUrl?: string | null
    status?: string
  }

  export type PrintingJobUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paperType?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    isCutting?: BoolFieldUpdateOperationsInput | boolean
    isDesign?: BoolFieldUpdateOperationsInput | boolean
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PrintingJobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paperType?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    isCutting?: BoolFieldUpdateOperationsInput | boolean
    isDesign?: BoolFieldUpdateOperationsInput | boolean
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PrintingJobCreateManyInput = {
    id?: number
    createdAt?: Date | string
    paperType: string
    width: number
    height: number
    quantity: number
    isCutting: boolean
    isDesign: boolean
    fileName?: string | null
    totalPrice: number
    pdfUrl?: string | null
    status?: string
  }

  export type PrintingJobUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paperType?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    isCutting?: BoolFieldUpdateOperationsInput | boolean
    isDesign?: BoolFieldUpdateOperationsInput | boolean
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PrintingJobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paperType?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    isCutting?: BoolFieldUpdateOperationsInput | boolean
    isDesign?: BoolFieldUpdateOperationsInput | boolean
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PricingCreateInput = {
    paperType: string
    range1_2: number
    range3_19: number
    range20_59: number
    range60_99: number
    range100: number
    cuttingCost: number
    designCost: number
  }

  export type PricingUncheckedCreateInput = {
    id?: number
    paperType: string
    range1_2: number
    range3_19: number
    range20_59: number
    range60_99: number
    range100: number
    cuttingCost: number
    designCost: number
  }

  export type PricingUpdateInput = {
    paperType?: StringFieldUpdateOperationsInput | string
    range1_2?: FloatFieldUpdateOperationsInput | number
    range3_19?: FloatFieldUpdateOperationsInput | number
    range20_59?: FloatFieldUpdateOperationsInput | number
    range60_99?: FloatFieldUpdateOperationsInput | number
    range100?: FloatFieldUpdateOperationsInput | number
    cuttingCost?: FloatFieldUpdateOperationsInput | number
    designCost?: FloatFieldUpdateOperationsInput | number
  }

  export type PricingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paperType?: StringFieldUpdateOperationsInput | string
    range1_2?: FloatFieldUpdateOperationsInput | number
    range3_19?: FloatFieldUpdateOperationsInput | number
    range20_59?: FloatFieldUpdateOperationsInput | number
    range60_99?: FloatFieldUpdateOperationsInput | number
    range100?: FloatFieldUpdateOperationsInput | number
    cuttingCost?: FloatFieldUpdateOperationsInput | number
    designCost?: FloatFieldUpdateOperationsInput | number
  }

  export type PricingCreateManyInput = {
    id?: number
    paperType: string
    range1_2: number
    range3_19: number
    range20_59: number
    range60_99: number
    range100: number
    cuttingCost: number
    designCost: number
  }

  export type PricingUpdateManyMutationInput = {
    paperType?: StringFieldUpdateOperationsInput | string
    range1_2?: FloatFieldUpdateOperationsInput | number
    range3_19?: FloatFieldUpdateOperationsInput | number
    range20_59?: FloatFieldUpdateOperationsInput | number
    range60_99?: FloatFieldUpdateOperationsInput | number
    range100?: FloatFieldUpdateOperationsInput | number
    cuttingCost?: FloatFieldUpdateOperationsInput | number
    designCost?: FloatFieldUpdateOperationsInput | number
  }

  export type PricingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paperType?: StringFieldUpdateOperationsInput | string
    range1_2?: FloatFieldUpdateOperationsInput | number
    range3_19?: FloatFieldUpdateOperationsInput | number
    range20_59?: FloatFieldUpdateOperationsInput | number
    range60_99?: FloatFieldUpdateOperationsInput | number
    range100?: FloatFieldUpdateOperationsInput | number
    cuttingCost?: FloatFieldUpdateOperationsInput | number
    designCost?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PrintingJobOrderByRelevanceInput = {
    fields: PrintingJobOrderByRelevanceFieldEnum | PrintingJobOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PrintingJobCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    paperType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    quantity?: SortOrder
    isCutting?: SortOrder
    isDesign?: SortOrder
    fileName?: SortOrder
    totalPrice?: SortOrder
    pdfUrl?: SortOrder
    status?: SortOrder
  }

  export type PrintingJobAvgOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type PrintingJobMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    paperType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    quantity?: SortOrder
    isCutting?: SortOrder
    isDesign?: SortOrder
    fileName?: SortOrder
    totalPrice?: SortOrder
    pdfUrl?: SortOrder
    status?: SortOrder
  }

  export type PrintingJobMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    paperType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    quantity?: SortOrder
    isCutting?: SortOrder
    isDesign?: SortOrder
    fileName?: SortOrder
    totalPrice?: SortOrder
    pdfUrl?: SortOrder
    status?: SortOrder
  }

  export type PrintingJobSumOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PricingOrderByRelevanceInput = {
    fields: PricingOrderByRelevanceFieldEnum | PricingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PricingCountOrderByAggregateInput = {
    id?: SortOrder
    paperType?: SortOrder
    range1_2?: SortOrder
    range3_19?: SortOrder
    range20_59?: SortOrder
    range60_99?: SortOrder
    range100?: SortOrder
    cuttingCost?: SortOrder
    designCost?: SortOrder
  }

  export type PricingAvgOrderByAggregateInput = {
    id?: SortOrder
    range1_2?: SortOrder
    range3_19?: SortOrder
    range20_59?: SortOrder
    range60_99?: SortOrder
    range100?: SortOrder
    cuttingCost?: SortOrder
    designCost?: SortOrder
  }

  export type PricingMaxOrderByAggregateInput = {
    id?: SortOrder
    paperType?: SortOrder
    range1_2?: SortOrder
    range3_19?: SortOrder
    range20_59?: SortOrder
    range60_99?: SortOrder
    range100?: SortOrder
    cuttingCost?: SortOrder
    designCost?: SortOrder
  }

  export type PricingMinOrderByAggregateInput = {
    id?: SortOrder
    paperType?: SortOrder
    range1_2?: SortOrder
    range3_19?: SortOrder
    range20_59?: SortOrder
    range60_99?: SortOrder
    range100?: SortOrder
    cuttingCost?: SortOrder
    designCost?: SortOrder
  }

  export type PricingSumOrderByAggregateInput = {
    id?: SortOrder
    range1_2?: SortOrder
    range3_19?: SortOrder
    range20_59?: SortOrder
    range60_99?: SortOrder
    range100?: SortOrder
    cuttingCost?: SortOrder
    designCost?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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