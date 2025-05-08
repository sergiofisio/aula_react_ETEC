
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
 * Model cliente
 * 
 */
export type cliente = $Result.DefaultSelection<Prisma.$clientePayload>
/**
 * Model endereco
 * 
 */
export type endereco = $Result.DefaultSelection<Prisma.$enderecoPayload>
/**
 * Model telefone
 * 
 */
export type telefone = $Result.DefaultSelection<Prisma.$telefonePayload>
/**
 * Model reserva
 * 
 */
export type reserva = $Result.DefaultSelection<Prisma.$reservaPayload>
/**
 * Model pedido
 * 
 */
export type pedido = $Result.DefaultSelection<Prisma.$pedidoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
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
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
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
   * `prisma.cliente`: Exposes CRUD operations for the **cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.clienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endereco`: Exposes CRUD operations for the **endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.enderecoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telefone`: Exposes CRUD operations for the **telefone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Telefones
    * const telefones = await prisma.telefone.findMany()
    * ```
    */
  get telefone(): Prisma.telefoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserva`: Exposes CRUD operations for the **reserva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reserva.findMany()
    * ```
    */
  get reserva(): Prisma.reservaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.pedidoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    cliente: 'cliente',
    endereco: 'endereco',
    telefone: 'telefone',
    reserva: 'reserva',
    pedido: 'pedido'
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
      modelProps: "cliente" | "endereco" | "telefone" | "reserva" | "pedido"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cliente: {
        payload: Prisma.$clientePayload<ExtArgs>
        fields: Prisma.clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findFirst: {
            args: Prisma.clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findMany: {
            args: Prisma.clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          create: {
            args: Prisma.clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          createMany: {
            args: Prisma.clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          delete: {
            args: Prisma.clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          update: {
            args: Prisma.clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          deleteMany: {
            args: Prisma.clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          upsert: {
            args: Prisma.clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.clienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      endereco: {
        payload: Prisma.$enderecoPayload<ExtArgs>
        fields: Prisma.enderecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enderecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enderecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          findFirst: {
            args: Prisma.enderecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enderecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          findMany: {
            args: Prisma.enderecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>[]
          }
          create: {
            args: Prisma.enderecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          createMany: {
            args: Prisma.enderecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.enderecoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>[]
          }
          delete: {
            args: Prisma.enderecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          update: {
            args: Prisma.enderecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          deleteMany: {
            args: Prisma.enderecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enderecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.enderecoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>[]
          }
          upsert: {
            args: Prisma.enderecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco>
          }
          groupBy: {
            args: Prisma.enderecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.enderecoCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoCountAggregateOutputType> | number
          }
        }
      }
      telefone: {
        payload: Prisma.$telefonePayload<ExtArgs>
        fields: Prisma.telefoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.telefoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.telefoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonePayload>
          }
          findFirst: {
            args: Prisma.telefoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.telefoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonePayload>
          }
          findMany: {
            args: Prisma.telefoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonePayload>[]
          }
          create: {
            args: Prisma.telefoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonePayload>
          }
          createMany: {
            args: Prisma.telefoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.telefoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonePayload>[]
          }
          delete: {
            args: Prisma.telefoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonePayload>
          }
          update: {
            args: Prisma.telefoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonePayload>
          }
          deleteMany: {
            args: Prisma.telefoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.telefoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.telefoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonePayload>[]
          }
          upsert: {
            args: Prisma.telefoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonePayload>
          }
          aggregate: {
            args: Prisma.TelefoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelefone>
          }
          groupBy: {
            args: Prisma.telefoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelefoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.telefoneCountArgs<ExtArgs>
            result: $Utils.Optional<TelefoneCountAggregateOutputType> | number
          }
        }
      }
      reserva: {
        payload: Prisma.$reservaPayload<ExtArgs>
        fields: Prisma.reservaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reservaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reservaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          findFirst: {
            args: Prisma.reservaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reservaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          findMany: {
            args: Prisma.reservaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>[]
          }
          create: {
            args: Prisma.reservaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          createMany: {
            args: Prisma.reservaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reservaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>[]
          }
          delete: {
            args: Prisma.reservaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          update: {
            args: Prisma.reservaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          deleteMany: {
            args: Prisma.reservaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reservaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reservaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>[]
          }
          upsert: {
            args: Prisma.reservaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          aggregate: {
            args: Prisma.ReservaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva>
          }
          groupBy: {
            args: Prisma.reservaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaGroupByOutputType>[]
          }
          count: {
            args: Prisma.reservaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaCountAggregateOutputType> | number
          }
        }
      }
      pedido: {
        payload: Prisma.$pedidoPayload<ExtArgs>
        fields: Prisma.pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findFirst: {
            args: Prisma.pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findMany: {
            args: Prisma.pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          create: {
            args: Prisma.pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          createMany: {
            args: Prisma.pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          delete: {
            args: Prisma.pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          update: {
            args: Prisma.pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          deleteMany: {
            args: Prisma.pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          upsert: {
            args: Prisma.pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
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
    cliente?: clienteOmit
    endereco?: enderecoOmit
    telefone?: telefoneOmit
    reserva?: reservaOmit
    pedido?: pedidoOmit
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
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    reservas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | ClienteCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservaWhereInput
  }


  /**
   * Count Type ReservaCountOutputType
   */

  export type ReservaCountOutputType = {
    pedidos: number
  }

  export type ReservaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | ReservaCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * ReservaCountOutputType without action
   */
  export type ReservaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaCountOutputType
     */
    select?: ReservaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservaCountOutputType without action
   */
  export type ReservaCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    data_nascimento: Date | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    data_nascimento: Date | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    data_nascimento: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    data_nascimento?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    data_nascimento?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    data_nascimento?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cliente to aggregate.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clienteWhereInput
    orderBy?: clienteOrderByWithAggregationInput | clienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nome: string
    email: string
    data_nascimento: Date
    password: string
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    data_nascimento?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    endereco?: boolean | cliente$enderecoArgs<ExtArgs>
    telefone?: boolean | cliente$telefoneArgs<ExtArgs>
    reservas?: boolean | cliente$reservasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    data_nascimento?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    data_nascimento?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    data_nascimento?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type clienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "data_nascimento" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>
  export type clienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereco?: boolean | cliente$enderecoArgs<ExtArgs>
    telefone?: boolean | cliente$telefoneArgs<ExtArgs>
    reservas?: boolean | cliente$reservasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type clienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cliente"
    objects: {
      endereco: Prisma.$enderecoPayload<ExtArgs> | null
      telefone: Prisma.$telefonePayload<ExtArgs> | null
      reservas: Prisma.$reservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      data_nascimento: Date
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type clienteGetPayload<S extends boolean | null | undefined | clienteDefaultArgs> = $Result.GetResult<Prisma.$clientePayload, S>

  type clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cliente'], meta: { name: 'cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {clienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clienteFindUniqueArgs>(args: SelectSubset<T, clienteFindUniqueArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clienteFindFirstArgs>(args?: SelectSubset<T, clienteFindFirstArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clienteFindManyArgs>(args?: SelectSubset<T, clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {clienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends clienteCreateArgs>(args: SelectSubset<T, clienteCreateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clienteCreateManyArgs>(args?: SelectSubset<T, clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {clienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clienteCreateManyAndReturnArgs>(args?: SelectSubset<T, clienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {clienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends clienteDeleteArgs>(args: SelectSubset<T, clienteDeleteArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {clienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clienteUpdateArgs>(args: SelectSubset<T, clienteUpdateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clienteDeleteManyArgs>(args?: SelectSubset<T, clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clienteUpdateManyArgs>(args: SelectSubset<T, clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {clienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
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
    updateManyAndReturn<T extends clienteUpdateManyAndReturnArgs>(args: SelectSubset<T, clienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {clienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends clienteUpsertArgs>(args: SelectSubset<T, clienteUpsertArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clienteCountArgs>(
      args?: Subset<T, clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteGroupByArgs} args - Group by arguments.
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
      T extends clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clienteGroupByArgs['orderBy'] }
        : { orderBy?: clienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cliente model
   */
  readonly fields: clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endereco<T extends cliente$enderecoArgs<ExtArgs> = {}>(args?: Subset<T, cliente$enderecoArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    telefone<T extends cliente$telefoneArgs<ExtArgs> = {}>(args?: Subset<T, cliente$telefoneArgs<ExtArgs>>): Prisma__telefoneClient<$Result.GetResult<Prisma.$telefonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reservas<T extends cliente$reservasArgs<ExtArgs> = {}>(args?: Subset<T, cliente$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cliente model
   */
  interface clienteFieldRefs {
    readonly id: FieldRef<"cliente", 'String'>
    readonly nome: FieldRef<"cliente", 'String'>
    readonly email: FieldRef<"cliente", 'String'>
    readonly data_nascimento: FieldRef<"cliente", 'DateTime'>
    readonly password: FieldRef<"cliente", 'String'>
    readonly createdAt: FieldRef<"cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cliente findUnique
   */
  export type clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findUniqueOrThrow
   */
  export type clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findFirst
   */
  export type clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findFirstOrThrow
   */
  export type clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findMany
   */
  export type clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente create
   */
  export type clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to create a cliente.
     */
    data: XOR<clienteCreateInput, clienteUncheckedCreateInput>
  }

  /**
   * cliente createMany
   */
  export type clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente createManyAndReturn
   */
  export type clienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente update
   */
  export type clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to update a cliente.
     */
    data: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
    /**
     * Choose, which cliente to update.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente updateMany
   */
  export type clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente updateManyAndReturn
   */
  export type clienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente upsert
   */
  export type clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The filter to search for the cliente to update in case it exists.
     */
    where: clienteWhereUniqueInput
    /**
     * In case the cliente found by the `where` argument doesn't exist, create a new cliente with this data.
     */
    create: XOR<clienteCreateInput, clienteUncheckedCreateInput>
    /**
     * In case the cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
  }

  /**
   * cliente delete
   */
  export type clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter which cliente to delete.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente deleteMany
   */
  export type clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * cliente.endereco
   */
  export type cliente$enderecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    where?: enderecoWhereInput
  }

  /**
   * cliente.telefone
   */
  export type cliente$telefoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefone
     */
    select?: telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefone
     */
    omit?: telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefoneInclude<ExtArgs> | null
    where?: telefoneWhereInput
  }

  /**
   * cliente.reservas
   */
  export type cliente$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    where?: reservaWhereInput
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    cursor?: reservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * cliente without action
   */
  export type clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
  }


  /**
   * Model endereco
   */

  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoMinAggregateOutputType = {
    id: string | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnderecoMaxAggregateOutputType = {
    id: string | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnderecoCountAggregateOutputType = {
    id: number
    logradouro: number
    numero: number
    complemento: number
    bairro: number
    cidade: number
    estado: number
    cep: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnderecoMinAggregateInputType = {
    id?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    cep?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnderecoMaxAggregateInputType = {
    id?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    cep?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnderecoCountAggregateInputType = {
    id?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    cep?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnderecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endereco to aggregate.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type enderecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enderecoWhereInput
    orderBy?: enderecoOrderByWithAggregationInput | enderecoOrderByWithAggregationInput[]
    by: EnderecoScalarFieldEnum[] | EnderecoScalarFieldEnum
    having?: enderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }

  export type EnderecoGroupByOutputType = {
    id: string
    logradouro: string
    numero: string
    complemento: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: EnderecoCountAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends enderecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type enderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type enderecoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type enderecoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type enderecoSelectScalar = {
    id?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type enderecoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "logradouro" | "numero" | "complemento" | "bairro" | "cidade" | "estado" | "cep" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["endereco"]>
  export type enderecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }
  export type enderecoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }
  export type enderecoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }

  export type $enderecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "endereco"
    objects: {
      user: Prisma.$clientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      logradouro: string
      numero: string
      complemento: string | null
      bairro: string
      cidade: string
      estado: string
      cep: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["endereco"]>
    composites: {}
  }

  type enderecoGetPayload<S extends boolean | null | undefined | enderecoDefaultArgs> = $Result.GetResult<Prisma.$enderecoPayload, S>

  type enderecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enderecoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecoCountAggregateInputType | true
    }

  export interface enderecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['endereco'], meta: { name: 'endereco' } }
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {enderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enderecoFindUniqueArgs>(args: SelectSubset<T, enderecoFindUniqueArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endereco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enderecoFindUniqueOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enderecoFindUniqueOrThrowArgs>(args: SelectSubset<T, enderecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enderecoFindFirstArgs>(args?: SelectSubset<T, enderecoFindFirstArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindFirstOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enderecoFindFirstOrThrowArgs>(args?: SelectSubset<T, enderecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoWithIdOnly = await prisma.endereco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends enderecoFindManyArgs>(args?: SelectSubset<T, enderecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endereco.
     * @param {enderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
     */
    create<T extends enderecoCreateArgs>(args: SelectSubset<T, enderecoCreateArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enderecos.
     * @param {enderecoCreateManyArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enderecoCreateManyArgs>(args?: SelectSubset<T, enderecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enderecos and returns the data saved in the database.
     * @param {enderecoCreateManyAndReturnArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enderecos and only return the `id`
     * const enderecoWithIdOnly = await prisma.endereco.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends enderecoCreateManyAndReturnArgs>(args?: SelectSubset<T, enderecoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endereco.
     * @param {enderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
     */
    delete<T extends enderecoDeleteArgs>(args: SelectSubset<T, enderecoDeleteArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endereco.
     * @param {enderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enderecoUpdateArgs>(args: SelectSubset<T, enderecoUpdateArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enderecos.
     * @param {enderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enderecoDeleteManyArgs>(args?: SelectSubset<T, enderecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enderecoUpdateManyArgs>(args: SelectSubset<T, enderecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos and returns the data updated in the database.
     * @param {enderecoUpdateManyAndReturnArgs} args - Arguments to update many Enderecos.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enderecos and only return the `id`
     * const enderecoWithIdOnly = await prisma.endereco.updateManyAndReturn({
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
    updateManyAndReturn<T extends enderecoUpdateManyAndReturnArgs>(args: SelectSubset<T, enderecoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endereco.
     * @param {enderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
     */
    upsert<T extends enderecoUpsertArgs>(args: SelectSubset<T, enderecoUpsertArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends enderecoCountArgs>(
      args?: Subset<T, enderecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoGroupByArgs} args - Group by arguments.
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
      T extends enderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enderecoGroupByArgs['orderBy'] }
        : { orderBy?: enderecoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, enderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the endereco model
   */
  readonly fields: enderecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enderecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends clienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clienteDefaultArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the endereco model
   */
  interface enderecoFieldRefs {
    readonly id: FieldRef<"endereco", 'String'>
    readonly logradouro: FieldRef<"endereco", 'String'>
    readonly numero: FieldRef<"endereco", 'String'>
    readonly complemento: FieldRef<"endereco", 'String'>
    readonly bairro: FieldRef<"endereco", 'String'>
    readonly cidade: FieldRef<"endereco", 'String'>
    readonly estado: FieldRef<"endereco", 'String'>
    readonly cep: FieldRef<"endereco", 'String'>
    readonly userId: FieldRef<"endereco", 'String'>
    readonly createdAt: FieldRef<"endereco", 'DateTime'>
    readonly updatedAt: FieldRef<"endereco", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * endereco findUnique
   */
  export type enderecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco findUniqueOrThrow
   */
  export type enderecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco findFirst
   */
  export type enderecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * endereco findFirstOrThrow
   */
  export type enderecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * endereco findMany
   */
  export type enderecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which enderecos to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * endereco create
   */
  export type enderecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The data needed to create a endereco.
     */
    data: XOR<enderecoCreateInput, enderecoUncheckedCreateInput>
  }

  /**
   * endereco createMany
   */
  export type enderecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enderecos.
     */
    data: enderecoCreateManyInput | enderecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * endereco createManyAndReturn
   */
  export type enderecoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * The data used to create many enderecos.
     */
    data: enderecoCreateManyInput | enderecoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * endereco update
   */
  export type enderecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The data needed to update a endereco.
     */
    data: XOR<enderecoUpdateInput, enderecoUncheckedUpdateInput>
    /**
     * Choose, which endereco to update.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco updateMany
   */
  export type enderecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enderecos.
     */
    data: XOR<enderecoUpdateManyMutationInput, enderecoUncheckedUpdateManyInput>
    /**
     * Filter which enderecos to update
     */
    where?: enderecoWhereInput
    /**
     * Limit how many enderecos to update.
     */
    limit?: number
  }

  /**
   * endereco updateManyAndReturn
   */
  export type enderecoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * The data used to update enderecos.
     */
    data: XOR<enderecoUpdateManyMutationInput, enderecoUncheckedUpdateManyInput>
    /**
     * Filter which enderecos to update
     */
    where?: enderecoWhereInput
    /**
     * Limit how many enderecos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * endereco upsert
   */
  export type enderecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The filter to search for the endereco to update in case it exists.
     */
    where: enderecoWhereUniqueInput
    /**
     * In case the endereco found by the `where` argument doesn't exist, create a new endereco with this data.
     */
    create: XOR<enderecoCreateInput, enderecoUncheckedCreateInput>
    /**
     * In case the endereco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enderecoUpdateInput, enderecoUncheckedUpdateInput>
  }

  /**
   * endereco delete
   */
  export type enderecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter which endereco to delete.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco deleteMany
   */
  export type enderecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enderecos to delete
     */
    where?: enderecoWhereInput
    /**
     * Limit how many enderecos to delete.
     */
    limit?: number
  }

  /**
   * endereco without action
   */
  export type enderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
  }


  /**
   * Model telefone
   */

  export type AggregateTelefone = {
    _count: TelefoneCountAggregateOutputType | null
    _min: TelefoneMinAggregateOutputType | null
    _max: TelefoneMaxAggregateOutputType | null
  }

  export type TelefoneMinAggregateOutputType = {
    id: string | null
    ddd: string | null
    numero: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TelefoneMaxAggregateOutputType = {
    id: string | null
    ddd: string | null
    numero: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TelefoneCountAggregateOutputType = {
    id: number
    ddd: number
    numero: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TelefoneMinAggregateInputType = {
    id?: true
    ddd?: true
    numero?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TelefoneMaxAggregateInputType = {
    id?: true
    ddd?: true
    numero?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TelefoneCountAggregateInputType = {
    id?: true
    ddd?: true
    numero?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TelefoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which telefone to aggregate.
     */
    where?: telefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of telefones to fetch.
     */
    orderBy?: telefoneOrderByWithRelationInput | telefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: telefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned telefones
    **/
    _count?: true | TelefoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelefoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelefoneMaxAggregateInputType
  }

  export type GetTelefoneAggregateType<T extends TelefoneAggregateArgs> = {
        [P in keyof T & keyof AggregateTelefone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelefone[P]>
      : GetScalarType<T[P], AggregateTelefone[P]>
  }




  export type telefoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: telefoneWhereInput
    orderBy?: telefoneOrderByWithAggregationInput | telefoneOrderByWithAggregationInput[]
    by: TelefoneScalarFieldEnum[] | TelefoneScalarFieldEnum
    having?: telefoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelefoneCountAggregateInputType | true
    _min?: TelefoneMinAggregateInputType
    _max?: TelefoneMaxAggregateInputType
  }

  export type TelefoneGroupByOutputType = {
    id: string
    ddd: string
    numero: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: TelefoneCountAggregateOutputType | null
    _min: TelefoneMinAggregateOutputType | null
    _max: TelefoneMaxAggregateOutputType | null
  }

  type GetTelefoneGroupByPayload<T extends telefoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelefoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelefoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelefoneGroupByOutputType[P]>
            : GetScalarType<T[P], TelefoneGroupByOutputType[P]>
        }
      >
    >


  export type telefoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ddd?: boolean
    numero?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telefone"]>

  export type telefoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ddd?: boolean
    numero?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telefone"]>

  export type telefoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ddd?: boolean
    numero?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telefone"]>

  export type telefoneSelectScalar = {
    id?: boolean
    ddd?: boolean
    numero?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type telefoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ddd" | "numero" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["telefone"]>
  export type telefoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }
  export type telefoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }
  export type telefoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }

  export type $telefonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "telefone"
    objects: {
      user: Prisma.$clientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ddd: string
      numero: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["telefone"]>
    composites: {}
  }

  type telefoneGetPayload<S extends boolean | null | undefined | telefoneDefaultArgs> = $Result.GetResult<Prisma.$telefonePayload, S>

  type telefoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<telefoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelefoneCountAggregateInputType | true
    }

  export interface telefoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['telefone'], meta: { name: 'telefone' } }
    /**
     * Find zero or one Telefone that matches the filter.
     * @param {telefoneFindUniqueArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends telefoneFindUniqueArgs>(args: SelectSubset<T, telefoneFindUniqueArgs<ExtArgs>>): Prisma__telefoneClient<$Result.GetResult<Prisma.$telefonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Telefone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {telefoneFindUniqueOrThrowArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends telefoneFindUniqueOrThrowArgs>(args: SelectSubset<T, telefoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__telefoneClient<$Result.GetResult<Prisma.$telefonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telefone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {telefoneFindFirstArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends telefoneFindFirstArgs>(args?: SelectSubset<T, telefoneFindFirstArgs<ExtArgs>>): Prisma__telefoneClient<$Result.GetResult<Prisma.$telefonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telefone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {telefoneFindFirstOrThrowArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends telefoneFindFirstOrThrowArgs>(args?: SelectSubset<T, telefoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__telefoneClient<$Result.GetResult<Prisma.$telefonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Telefones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {telefoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Telefones
     * const telefones = await prisma.telefone.findMany()
     * 
     * // Get first 10 Telefones
     * const telefones = await prisma.telefone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telefoneWithIdOnly = await prisma.telefone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends telefoneFindManyArgs>(args?: SelectSubset<T, telefoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$telefonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Telefone.
     * @param {telefoneCreateArgs} args - Arguments to create a Telefone.
     * @example
     * // Create one Telefone
     * const Telefone = await prisma.telefone.create({
     *   data: {
     *     // ... data to create a Telefone
     *   }
     * })
     * 
     */
    create<T extends telefoneCreateArgs>(args: SelectSubset<T, telefoneCreateArgs<ExtArgs>>): Prisma__telefoneClient<$Result.GetResult<Prisma.$telefonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Telefones.
     * @param {telefoneCreateManyArgs} args - Arguments to create many Telefones.
     * @example
     * // Create many Telefones
     * const telefone = await prisma.telefone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends telefoneCreateManyArgs>(args?: SelectSubset<T, telefoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Telefones and returns the data saved in the database.
     * @param {telefoneCreateManyAndReturnArgs} args - Arguments to create many Telefones.
     * @example
     * // Create many Telefones
     * const telefone = await prisma.telefone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Telefones and only return the `id`
     * const telefoneWithIdOnly = await prisma.telefone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends telefoneCreateManyAndReturnArgs>(args?: SelectSubset<T, telefoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$telefonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Telefone.
     * @param {telefoneDeleteArgs} args - Arguments to delete one Telefone.
     * @example
     * // Delete one Telefone
     * const Telefone = await prisma.telefone.delete({
     *   where: {
     *     // ... filter to delete one Telefone
     *   }
     * })
     * 
     */
    delete<T extends telefoneDeleteArgs>(args: SelectSubset<T, telefoneDeleteArgs<ExtArgs>>): Prisma__telefoneClient<$Result.GetResult<Prisma.$telefonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Telefone.
     * @param {telefoneUpdateArgs} args - Arguments to update one Telefone.
     * @example
     * // Update one Telefone
     * const telefone = await prisma.telefone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends telefoneUpdateArgs>(args: SelectSubset<T, telefoneUpdateArgs<ExtArgs>>): Prisma__telefoneClient<$Result.GetResult<Prisma.$telefonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Telefones.
     * @param {telefoneDeleteManyArgs} args - Arguments to filter Telefones to delete.
     * @example
     * // Delete a few Telefones
     * const { count } = await prisma.telefone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends telefoneDeleteManyArgs>(args?: SelectSubset<T, telefoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Telefones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {telefoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Telefones
     * const telefone = await prisma.telefone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends telefoneUpdateManyArgs>(args: SelectSubset<T, telefoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Telefones and returns the data updated in the database.
     * @param {telefoneUpdateManyAndReturnArgs} args - Arguments to update many Telefones.
     * @example
     * // Update many Telefones
     * const telefone = await prisma.telefone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Telefones and only return the `id`
     * const telefoneWithIdOnly = await prisma.telefone.updateManyAndReturn({
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
    updateManyAndReturn<T extends telefoneUpdateManyAndReturnArgs>(args: SelectSubset<T, telefoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$telefonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Telefone.
     * @param {telefoneUpsertArgs} args - Arguments to update or create a Telefone.
     * @example
     * // Update or create a Telefone
     * const telefone = await prisma.telefone.upsert({
     *   create: {
     *     // ... data to create a Telefone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Telefone we want to update
     *   }
     * })
     */
    upsert<T extends telefoneUpsertArgs>(args: SelectSubset<T, telefoneUpsertArgs<ExtArgs>>): Prisma__telefoneClient<$Result.GetResult<Prisma.$telefonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Telefones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {telefoneCountArgs} args - Arguments to filter Telefones to count.
     * @example
     * // Count the number of Telefones
     * const count = await prisma.telefone.count({
     *   where: {
     *     // ... the filter for the Telefones we want to count
     *   }
     * })
    **/
    count<T extends telefoneCountArgs>(
      args?: Subset<T, telefoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelefoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Telefone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TelefoneAggregateArgs>(args: Subset<T, TelefoneAggregateArgs>): Prisma.PrismaPromise<GetTelefoneAggregateType<T>>

    /**
     * Group by Telefone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {telefoneGroupByArgs} args - Group by arguments.
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
      T extends telefoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: telefoneGroupByArgs['orderBy'] }
        : { orderBy?: telefoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, telefoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelefoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the telefone model
   */
  readonly fields: telefoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for telefone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__telefoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends clienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clienteDefaultArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the telefone model
   */
  interface telefoneFieldRefs {
    readonly id: FieldRef<"telefone", 'String'>
    readonly ddd: FieldRef<"telefone", 'String'>
    readonly numero: FieldRef<"telefone", 'String'>
    readonly userId: FieldRef<"telefone", 'String'>
    readonly createdAt: FieldRef<"telefone", 'DateTime'>
    readonly updatedAt: FieldRef<"telefone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * telefone findUnique
   */
  export type telefoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefone
     */
    select?: telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefone
     */
    omit?: telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefoneInclude<ExtArgs> | null
    /**
     * Filter, which telefone to fetch.
     */
    where: telefoneWhereUniqueInput
  }

  /**
   * telefone findUniqueOrThrow
   */
  export type telefoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefone
     */
    select?: telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefone
     */
    omit?: telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefoneInclude<ExtArgs> | null
    /**
     * Filter, which telefone to fetch.
     */
    where: telefoneWhereUniqueInput
  }

  /**
   * telefone findFirst
   */
  export type telefoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefone
     */
    select?: telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefone
     */
    omit?: telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefoneInclude<ExtArgs> | null
    /**
     * Filter, which telefone to fetch.
     */
    where?: telefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of telefones to fetch.
     */
    orderBy?: telefoneOrderByWithRelationInput | telefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for telefones.
     */
    cursor?: telefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of telefones.
     */
    distinct?: TelefoneScalarFieldEnum | TelefoneScalarFieldEnum[]
  }

  /**
   * telefone findFirstOrThrow
   */
  export type telefoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefone
     */
    select?: telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefone
     */
    omit?: telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefoneInclude<ExtArgs> | null
    /**
     * Filter, which telefone to fetch.
     */
    where?: telefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of telefones to fetch.
     */
    orderBy?: telefoneOrderByWithRelationInput | telefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for telefones.
     */
    cursor?: telefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of telefones.
     */
    distinct?: TelefoneScalarFieldEnum | TelefoneScalarFieldEnum[]
  }

  /**
   * telefone findMany
   */
  export type telefoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefone
     */
    select?: telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefone
     */
    omit?: telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefoneInclude<ExtArgs> | null
    /**
     * Filter, which telefones to fetch.
     */
    where?: telefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of telefones to fetch.
     */
    orderBy?: telefoneOrderByWithRelationInput | telefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing telefones.
     */
    cursor?: telefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` telefones.
     */
    skip?: number
    distinct?: TelefoneScalarFieldEnum | TelefoneScalarFieldEnum[]
  }

  /**
   * telefone create
   */
  export type telefoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefone
     */
    select?: telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefone
     */
    omit?: telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefoneInclude<ExtArgs> | null
    /**
     * The data needed to create a telefone.
     */
    data: XOR<telefoneCreateInput, telefoneUncheckedCreateInput>
  }

  /**
   * telefone createMany
   */
  export type telefoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many telefones.
     */
    data: telefoneCreateManyInput | telefoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * telefone createManyAndReturn
   */
  export type telefoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefone
     */
    select?: telefoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the telefone
     */
    omit?: telefoneOmit<ExtArgs> | null
    /**
     * The data used to create many telefones.
     */
    data: telefoneCreateManyInput | telefoneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * telefone update
   */
  export type telefoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefone
     */
    select?: telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefone
     */
    omit?: telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefoneInclude<ExtArgs> | null
    /**
     * The data needed to update a telefone.
     */
    data: XOR<telefoneUpdateInput, telefoneUncheckedUpdateInput>
    /**
     * Choose, which telefone to update.
     */
    where: telefoneWhereUniqueInput
  }

  /**
   * telefone updateMany
   */
  export type telefoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update telefones.
     */
    data: XOR<telefoneUpdateManyMutationInput, telefoneUncheckedUpdateManyInput>
    /**
     * Filter which telefones to update
     */
    where?: telefoneWhereInput
    /**
     * Limit how many telefones to update.
     */
    limit?: number
  }

  /**
   * telefone updateManyAndReturn
   */
  export type telefoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefone
     */
    select?: telefoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the telefone
     */
    omit?: telefoneOmit<ExtArgs> | null
    /**
     * The data used to update telefones.
     */
    data: XOR<telefoneUpdateManyMutationInput, telefoneUncheckedUpdateManyInput>
    /**
     * Filter which telefones to update
     */
    where?: telefoneWhereInput
    /**
     * Limit how many telefones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefoneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * telefone upsert
   */
  export type telefoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefone
     */
    select?: telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefone
     */
    omit?: telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefoneInclude<ExtArgs> | null
    /**
     * The filter to search for the telefone to update in case it exists.
     */
    where: telefoneWhereUniqueInput
    /**
     * In case the telefone found by the `where` argument doesn't exist, create a new telefone with this data.
     */
    create: XOR<telefoneCreateInput, telefoneUncheckedCreateInput>
    /**
     * In case the telefone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<telefoneUpdateInput, telefoneUncheckedUpdateInput>
  }

  /**
   * telefone delete
   */
  export type telefoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefone
     */
    select?: telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefone
     */
    omit?: telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefoneInclude<ExtArgs> | null
    /**
     * Filter which telefone to delete.
     */
    where: telefoneWhereUniqueInput
  }

  /**
   * telefone deleteMany
   */
  export type telefoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which telefones to delete
     */
    where?: telefoneWhereInput
    /**
     * Limit how many telefones to delete.
     */
    limit?: number
  }

  /**
   * telefone without action
   */
  export type telefoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefone
     */
    select?: telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefone
     */
    omit?: telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefoneInclude<ExtArgs> | null
  }


  /**
   * Model reserva
   */

  export type AggregateReserva = {
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  export type ReservaAvgAggregateOutputType = {
    valor: number | null
  }

  export type ReservaSumAggregateOutputType = {
    valor: number | null
  }

  export type ReservaMinAggregateOutputType = {
    id: string | null
    data_inicio: Date | null
    data_fim: Date | null
    valor: number | null
    payed: boolean | null
    status: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservaMaxAggregateOutputType = {
    id: string | null
    data_inicio: Date | null
    data_fim: Date | null
    valor: number | null
    payed: boolean | null
    status: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservaCountAggregateOutputType = {
    id: number
    data_inicio: number
    data_fim: number
    valor: number
    payed: number
    status: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservaAvgAggregateInputType = {
    valor?: true
  }

  export type ReservaSumAggregateInputType = {
    valor?: true
  }

  export type ReservaMinAggregateInputType = {
    id?: true
    data_inicio?: true
    data_fim?: true
    valor?: true
    payed?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservaMaxAggregateInputType = {
    id?: true
    data_inicio?: true
    data_fim?: true
    valor?: true
    payed?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservaCountAggregateInputType = {
    id?: true
    data_inicio?: true
    data_fim?: true
    valor?: true
    payed?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reserva to aggregate.
     */
    where?: reservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reservas
    **/
    _count?: true | ReservaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaMaxAggregateInputType
  }

  export type GetReservaAggregateType<T extends ReservaAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva[P]>
      : GetScalarType<T[P], AggregateReserva[P]>
  }




  export type reservaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservaWhereInput
    orderBy?: reservaOrderByWithAggregationInput | reservaOrderByWithAggregationInput[]
    by: ReservaScalarFieldEnum[] | ReservaScalarFieldEnum
    having?: reservaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaCountAggregateInputType | true
    _avg?: ReservaAvgAggregateInputType
    _sum?: ReservaSumAggregateInputType
    _min?: ReservaMinAggregateInputType
    _max?: ReservaMaxAggregateInputType
  }

  export type ReservaGroupByOutputType = {
    id: string
    data_inicio: Date
    data_fim: Date
    valor: number
    payed: boolean
    status: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  type GetReservaGroupByPayload<T extends reservaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaGroupByOutputType[P]>
        }
      >
    >


  export type reservaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    valor?: boolean
    payed?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pedidos?: boolean | reserva$pedidosArgs<ExtArgs>
    user?: boolean | clienteDefaultArgs<ExtArgs>
    _count?: boolean | ReservaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type reservaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    valor?: boolean
    payed?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type reservaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    valor?: boolean
    payed?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type reservaSelectScalar = {
    id?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    valor?: boolean
    payed?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type reservaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data_inicio" | "data_fim" | "valor" | "payed" | "status" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["reserva"]>
  export type reservaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | reserva$pedidosArgs<ExtArgs>
    user?: boolean | clienteDefaultArgs<ExtArgs>
    _count?: boolean | ReservaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type reservaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }
  export type reservaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | clienteDefaultArgs<ExtArgs>
  }

  export type $reservaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reserva"
    objects: {
      pedidos: Prisma.$pedidoPayload<ExtArgs>[]
      user: Prisma.$clientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data_inicio: Date
      data_fim: Date
      valor: number
      payed: boolean
      status: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reserva"]>
    composites: {}
  }

  type reservaGetPayload<S extends boolean | null | undefined | reservaDefaultArgs> = $Result.GetResult<Prisma.$reservaPayload, S>

  type reservaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reservaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservaCountAggregateInputType | true
    }

  export interface reservaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reserva'], meta: { name: 'reserva' } }
    /**
     * Find zero or one Reserva that matches the filter.
     * @param {reservaFindUniqueArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reservaFindUniqueArgs>(args: SelectSubset<T, reservaFindUniqueArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reserva that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reservaFindUniqueOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reservaFindUniqueOrThrowArgs>(args: SelectSubset<T, reservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaFindFirstArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reservaFindFirstArgs>(args?: SelectSubset<T, reservaFindFirstArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaFindFirstOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reservaFindFirstOrThrowArgs>(args?: SelectSubset<T, reservaFindFirstOrThrowArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reserva.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reserva.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservaWithIdOnly = await prisma.reserva.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reservaFindManyArgs>(args?: SelectSubset<T, reservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reserva.
     * @param {reservaCreateArgs} args - Arguments to create a Reserva.
     * @example
     * // Create one Reserva
     * const Reserva = await prisma.reserva.create({
     *   data: {
     *     // ... data to create a Reserva
     *   }
     * })
     * 
     */
    create<T extends reservaCreateArgs>(args: SelectSubset<T, reservaCreateArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {reservaCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reservaCreateManyArgs>(args?: SelectSubset<T, reservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {reservaCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reservaCreateManyAndReturnArgs>(args?: SelectSubset<T, reservaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reserva.
     * @param {reservaDeleteArgs} args - Arguments to delete one Reserva.
     * @example
     * // Delete one Reserva
     * const Reserva = await prisma.reserva.delete({
     *   where: {
     *     // ... filter to delete one Reserva
     *   }
     * })
     * 
     */
    delete<T extends reservaDeleteArgs>(args: SelectSubset<T, reservaDeleteArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reserva.
     * @param {reservaUpdateArgs} args - Arguments to update one Reserva.
     * @example
     * // Update one Reserva
     * const reserva = await prisma.reserva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reservaUpdateArgs>(args: SelectSubset<T, reservaUpdateArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {reservaDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reserva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reservaDeleteManyArgs>(args?: SelectSubset<T, reservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reservaUpdateManyArgs>(args: SelectSubset<T, reservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {reservaUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.updateManyAndReturn({
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
    updateManyAndReturn<T extends reservaUpdateManyAndReturnArgs>(args: SelectSubset<T, reservaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reserva.
     * @param {reservaUpsertArgs} args - Arguments to update or create a Reserva.
     * @example
     * // Update or create a Reserva
     * const reserva = await prisma.reserva.upsert({
     *   create: {
     *     // ... data to create a Reserva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva we want to update
     *   }
     * })
     */
    upsert<T extends reservaUpsertArgs>(args: SelectSubset<T, reservaUpsertArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reserva.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends reservaCountArgs>(
      args?: Subset<T, reservaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservaAggregateArgs>(args: Subset<T, ReservaAggregateArgs>): Prisma.PrismaPromise<GetReservaAggregateType<T>>

    /**
     * Group by Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaGroupByArgs} args - Group by arguments.
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
      T extends reservaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reservaGroupByArgs['orderBy'] }
        : { orderBy?: reservaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reserva model
   */
  readonly fields: reservaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reserva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reservaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends reserva$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, reserva$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends clienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clienteDefaultArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the reserva model
   */
  interface reservaFieldRefs {
    readonly id: FieldRef<"reserva", 'String'>
    readonly data_inicio: FieldRef<"reserva", 'DateTime'>
    readonly data_fim: FieldRef<"reserva", 'DateTime'>
    readonly valor: FieldRef<"reserva", 'Float'>
    readonly payed: FieldRef<"reserva", 'Boolean'>
    readonly status: FieldRef<"reserva", 'String'>
    readonly userId: FieldRef<"reserva", 'String'>
    readonly createdAt: FieldRef<"reserva", 'DateTime'>
    readonly updatedAt: FieldRef<"reserva", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reserva findUnique
   */
  export type reservaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter, which reserva to fetch.
     */
    where: reservaWhereUniqueInput
  }

  /**
   * reserva findUniqueOrThrow
   */
  export type reservaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter, which reserva to fetch.
     */
    where: reservaWhereUniqueInput
  }

  /**
   * reserva findFirst
   */
  export type reservaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter, which reserva to fetch.
     */
    where?: reservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * reserva findFirstOrThrow
   */
  export type reservaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter, which reserva to fetch.
     */
    where?: reservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * reserva findMany
   */
  export type reservaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reservas.
     */
    cursor?: reservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * reserva create
   */
  export type reservaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * The data needed to create a reserva.
     */
    data: XOR<reservaCreateInput, reservaUncheckedCreateInput>
  }

  /**
   * reserva createMany
   */
  export type reservaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reservas.
     */
    data: reservaCreateManyInput | reservaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reserva createManyAndReturn
   */
  export type reservaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * The data used to create many reservas.
     */
    data: reservaCreateManyInput | reservaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reserva update
   */
  export type reservaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * The data needed to update a reserva.
     */
    data: XOR<reservaUpdateInput, reservaUncheckedUpdateInput>
    /**
     * Choose, which reserva to update.
     */
    where: reservaWhereUniqueInput
  }

  /**
   * reserva updateMany
   */
  export type reservaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reservas.
     */
    data: XOR<reservaUpdateManyMutationInput, reservaUncheckedUpdateManyInput>
    /**
     * Filter which reservas to update
     */
    where?: reservaWhereInput
    /**
     * Limit how many reservas to update.
     */
    limit?: number
  }

  /**
   * reserva updateManyAndReturn
   */
  export type reservaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * The data used to update reservas.
     */
    data: XOR<reservaUpdateManyMutationInput, reservaUncheckedUpdateManyInput>
    /**
     * Filter which reservas to update
     */
    where?: reservaWhereInput
    /**
     * Limit how many reservas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reserva upsert
   */
  export type reservaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * The filter to search for the reserva to update in case it exists.
     */
    where: reservaWhereUniqueInput
    /**
     * In case the reserva found by the `where` argument doesn't exist, create a new reserva with this data.
     */
    create: XOR<reservaCreateInput, reservaUncheckedCreateInput>
    /**
     * In case the reserva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reservaUpdateInput, reservaUncheckedUpdateInput>
  }

  /**
   * reserva delete
   */
  export type reservaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter which reserva to delete.
     */
    where: reservaWhereUniqueInput
  }

  /**
   * reserva deleteMany
   */
  export type reservaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservas to delete
     */
    where?: reservaWhereInput
    /**
     * Limit how many reservas to delete.
     */
    limit?: number
  }

  /**
   * reserva.pedidos
   */
  export type reserva$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    cursor?: pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * reserva without action
   */
  export type reservaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
  }


  /**
   * Model pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    valor: number | null
  }

  export type PedidoSumAggregateOutputType = {
    valor: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: string | null
    data: Date | null
    valor: number | null
    reservaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: string | null
    data: Date | null
    valor: number | null
    reservaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    data: number
    valor: number
    reservaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    valor?: true
  }

  export type PedidoSumAggregateInputType = {
    valor?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    data?: true
    valor?: true
    reservaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    data?: true
    valor?: true
    reservaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    data?: true
    valor?: true
    reservaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido to aggregate.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithAggregationInput | pedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: string
    data: Date
    valor: number
    reservaId: string
    createdAt: Date
    updatedAt: Date
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    valor?: boolean
    reservaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reserva?: boolean | reservaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    valor?: boolean
    reservaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reserva?: boolean | reservaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    valor?: boolean
    reservaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reserva?: boolean | reservaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectScalar = {
    id?: boolean
    data?: boolean
    valor?: boolean
    reservaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "valor" | "reservaId" | "createdAt" | "updatedAt", ExtArgs["result"]["pedido"]>
  export type pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | reservaDefaultArgs<ExtArgs>
  }
  export type pedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | reservaDefaultArgs<ExtArgs>
  }
  export type pedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | reservaDefaultArgs<ExtArgs>
  }

  export type $pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido"
    objects: {
      reserva: Prisma.$reservaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: Date
      valor: number
      reservaId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type pedidoGetPayload<S extends boolean | null | undefined | pedidoDefaultArgs> = $Result.GetResult<Prisma.$pedidoPayload, S>

  type pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido'], meta: { name: 'pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {pedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedidoFindUniqueArgs>(args: SelectSubset<T, pedidoFindUniqueArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedidoFindFirstArgs>(args?: SelectSubset<T, pedidoFindFirstArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pedidoFindManyArgs>(args?: SelectSubset<T, pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {pedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends pedidoCreateArgs>(args: SelectSubset<T, pedidoCreateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {pedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedidoCreateManyArgs>(args?: SelectSubset<T, pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {pedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, pedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {pedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends pedidoDeleteArgs>(args: SelectSubset<T, pedidoDeleteArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {pedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedidoUpdateArgs>(args: SelectSubset<T, pedidoUpdateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {pedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedidoDeleteManyArgs>(args?: SelectSubset<T, pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedidoUpdateManyArgs>(args: SelectSubset<T, pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {pedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
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
    updateManyAndReturn<T extends pedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, pedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {pedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends pedidoUpsertArgs>(args: SelectSubset<T, pedidoUpsertArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends pedidoCountArgs>(
      args?: Subset<T, pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoGroupByArgs} args - Group by arguments.
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
      T extends pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedidoGroupByArgs['orderBy'] }
        : { orderBy?: pedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido model
   */
  readonly fields: pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserva<T extends reservaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, reservaDefaultArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pedido model
   */
  interface pedidoFieldRefs {
    readonly id: FieldRef<"pedido", 'String'>
    readonly data: FieldRef<"pedido", 'DateTime'>
    readonly valor: FieldRef<"pedido", 'Float'>
    readonly reservaId: FieldRef<"pedido", 'String'>
    readonly createdAt: FieldRef<"pedido", 'DateTime'>
    readonly updatedAt: FieldRef<"pedido", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pedido findUnique
   */
  export type pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findUniqueOrThrow
   */
  export type pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findFirst
   */
  export type pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findFirstOrThrow
   */
  export type pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findMany
   */
  export type pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido create
   */
  export type pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido.
     */
    data: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
  }

  /**
   * pedido createMany
   */
  export type pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido createManyAndReturn
   */
  export type pedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido update
   */
  export type pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido.
     */
    data: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
    /**
     * Choose, which pedido to update.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido updateMany
   */
  export type pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
  }

  /**
   * pedido updateManyAndReturn
   */
  export type pedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido upsert
   */
  export type pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido to update in case it exists.
     */
    where: pedidoWhereUniqueInput
    /**
     * In case the pedido found by the `where` argument doesn't exist, create a new pedido with this data.
     */
    create: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
    /**
     * In case the pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
  }

  /**
   * pedido delete
   */
  export type pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter which pedido to delete.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido deleteMany
   */
  export type pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to delete
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to delete.
     */
    limit?: number
  }

  /**
   * pedido without action
   */
  export type pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
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


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    data_nascimento: 'data_nascimento',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const EnderecoScalarFieldEnum: {
    id: 'id',
    logradouro: 'logradouro',
    numero: 'numero',
    complemento: 'complemento',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado',
    cep: 'cep',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


  export const TelefoneScalarFieldEnum: {
    id: 'id',
    ddd: 'ddd',
    numero: 'numero',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TelefoneScalarFieldEnum = (typeof TelefoneScalarFieldEnum)[keyof typeof TelefoneScalarFieldEnum]


  export const ReservaScalarFieldEnum: {
    id: 'id',
    data_inicio: 'data_inicio',
    data_fim: 'data_fim',
    valor: 'valor',
    payed: 'payed',
    status: 'status',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservaScalarFieldEnum = (typeof ReservaScalarFieldEnum)[keyof typeof ReservaScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    valor: 'valor',
    reservaId: 'reservaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type clienteWhereInput = {
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    id?: StringFilter<"cliente"> | string
    nome?: StringFilter<"cliente"> | string
    email?: StringFilter<"cliente"> | string
    data_nascimento?: DateTimeFilter<"cliente"> | Date | string
    password?: StringFilter<"cliente"> | string
    createdAt?: DateTimeFilter<"cliente"> | Date | string
    updatedAt?: DateTimeFilter<"cliente"> | Date | string
    endereco?: XOR<EnderecoNullableScalarRelationFilter, enderecoWhereInput> | null
    telefone?: XOR<TelefoneNullableScalarRelationFilter, telefoneWhereInput> | null
    reservas?: ReservaListRelationFilter
  }

  export type clienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    data_nascimento?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    endereco?: enderecoOrderByWithRelationInput
    telefone?: telefoneOrderByWithRelationInput
    reservas?: reservaOrderByRelationAggregateInput
  }

  export type clienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    nome?: StringFilter<"cliente"> | string
    data_nascimento?: DateTimeFilter<"cliente"> | Date | string
    password?: StringFilter<"cliente"> | string
    createdAt?: DateTimeFilter<"cliente"> | Date | string
    updatedAt?: DateTimeFilter<"cliente"> | Date | string
    endereco?: XOR<EnderecoNullableScalarRelationFilter, enderecoWhereInput> | null
    telefone?: XOR<TelefoneNullableScalarRelationFilter, telefoneWhereInput> | null
    reservas?: ReservaListRelationFilter
  }, "id" | "email">

  export type clienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    data_nascimento?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: clienteCountOrderByAggregateInput
    _max?: clienteMaxOrderByAggregateInput
    _min?: clienteMinOrderByAggregateInput
  }

  export type clienteScalarWhereWithAggregatesInput = {
    AND?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    OR?: clienteScalarWhereWithAggregatesInput[]
    NOT?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"cliente"> | string
    nome?: StringWithAggregatesFilter<"cliente"> | string
    email?: StringWithAggregatesFilter<"cliente"> | string
    data_nascimento?: DateTimeWithAggregatesFilter<"cliente"> | Date | string
    password?: StringWithAggregatesFilter<"cliente"> | string
    createdAt?: DateTimeWithAggregatesFilter<"cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"cliente"> | Date | string
  }

  export type enderecoWhereInput = {
    AND?: enderecoWhereInput | enderecoWhereInput[]
    OR?: enderecoWhereInput[]
    NOT?: enderecoWhereInput | enderecoWhereInput[]
    id?: StringFilter<"endereco"> | string
    logradouro?: StringFilter<"endereco"> | string
    numero?: StringFilter<"endereco"> | string
    complemento?: StringNullableFilter<"endereco"> | string | null
    bairro?: StringFilter<"endereco"> | string
    cidade?: StringFilter<"endereco"> | string
    estado?: StringFilter<"endereco"> | string
    cep?: StringFilter<"endereco"> | string
    userId?: StringFilter<"endereco"> | string
    createdAt?: DateTimeFilter<"endereco"> | Date | string
    updatedAt?: DateTimeFilter<"endereco"> | Date | string
    user?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
  }

  export type enderecoOrderByWithRelationInput = {
    id?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: clienteOrderByWithRelationInput
  }

  export type enderecoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: enderecoWhereInput | enderecoWhereInput[]
    OR?: enderecoWhereInput[]
    NOT?: enderecoWhereInput | enderecoWhereInput[]
    logradouro?: StringFilter<"endereco"> | string
    numero?: StringFilter<"endereco"> | string
    complemento?: StringNullableFilter<"endereco"> | string | null
    bairro?: StringFilter<"endereco"> | string
    cidade?: StringFilter<"endereco"> | string
    estado?: StringFilter<"endereco"> | string
    cep?: StringFilter<"endereco"> | string
    createdAt?: DateTimeFilter<"endereco"> | Date | string
    updatedAt?: DateTimeFilter<"endereco"> | Date | string
    user?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
  }, "id" | "userId">

  export type enderecoOrderByWithAggregationInput = {
    id?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: enderecoCountOrderByAggregateInput
    _max?: enderecoMaxOrderByAggregateInput
    _min?: enderecoMinOrderByAggregateInput
  }

  export type enderecoScalarWhereWithAggregatesInput = {
    AND?: enderecoScalarWhereWithAggregatesInput | enderecoScalarWhereWithAggregatesInput[]
    OR?: enderecoScalarWhereWithAggregatesInput[]
    NOT?: enderecoScalarWhereWithAggregatesInput | enderecoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"endereco"> | string
    logradouro?: StringWithAggregatesFilter<"endereco"> | string
    numero?: StringWithAggregatesFilter<"endereco"> | string
    complemento?: StringNullableWithAggregatesFilter<"endereco"> | string | null
    bairro?: StringWithAggregatesFilter<"endereco"> | string
    cidade?: StringWithAggregatesFilter<"endereco"> | string
    estado?: StringWithAggregatesFilter<"endereco"> | string
    cep?: StringWithAggregatesFilter<"endereco"> | string
    userId?: StringWithAggregatesFilter<"endereco"> | string
    createdAt?: DateTimeWithAggregatesFilter<"endereco"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"endereco"> | Date | string
  }

  export type telefoneWhereInput = {
    AND?: telefoneWhereInput | telefoneWhereInput[]
    OR?: telefoneWhereInput[]
    NOT?: telefoneWhereInput | telefoneWhereInput[]
    id?: StringFilter<"telefone"> | string
    ddd?: StringFilter<"telefone"> | string
    numero?: StringFilter<"telefone"> | string
    userId?: StringFilter<"telefone"> | string
    createdAt?: DateTimeFilter<"telefone"> | Date | string
    updatedAt?: DateTimeFilter<"telefone"> | Date | string
    user?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
  }

  export type telefoneOrderByWithRelationInput = {
    id?: SortOrder
    ddd?: SortOrder
    numero?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: clienteOrderByWithRelationInput
  }

  export type telefoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: telefoneWhereInput | telefoneWhereInput[]
    OR?: telefoneWhereInput[]
    NOT?: telefoneWhereInput | telefoneWhereInput[]
    ddd?: StringFilter<"telefone"> | string
    numero?: StringFilter<"telefone"> | string
    createdAt?: DateTimeFilter<"telefone"> | Date | string
    updatedAt?: DateTimeFilter<"telefone"> | Date | string
    user?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
  }, "id" | "userId">

  export type telefoneOrderByWithAggregationInput = {
    id?: SortOrder
    ddd?: SortOrder
    numero?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: telefoneCountOrderByAggregateInput
    _max?: telefoneMaxOrderByAggregateInput
    _min?: telefoneMinOrderByAggregateInput
  }

  export type telefoneScalarWhereWithAggregatesInput = {
    AND?: telefoneScalarWhereWithAggregatesInput | telefoneScalarWhereWithAggregatesInput[]
    OR?: telefoneScalarWhereWithAggregatesInput[]
    NOT?: telefoneScalarWhereWithAggregatesInput | telefoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"telefone"> | string
    ddd?: StringWithAggregatesFilter<"telefone"> | string
    numero?: StringWithAggregatesFilter<"telefone"> | string
    userId?: StringWithAggregatesFilter<"telefone"> | string
    createdAt?: DateTimeWithAggregatesFilter<"telefone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"telefone"> | Date | string
  }

  export type reservaWhereInput = {
    AND?: reservaWhereInput | reservaWhereInput[]
    OR?: reservaWhereInput[]
    NOT?: reservaWhereInput | reservaWhereInput[]
    id?: StringFilter<"reserva"> | string
    data_inicio?: DateTimeFilter<"reserva"> | Date | string
    data_fim?: DateTimeFilter<"reserva"> | Date | string
    valor?: FloatFilter<"reserva"> | number
    payed?: BoolFilter<"reserva"> | boolean
    status?: StringFilter<"reserva"> | string
    userId?: StringFilter<"reserva"> | string
    createdAt?: DateTimeFilter<"reserva"> | Date | string
    updatedAt?: DateTimeFilter<"reserva"> | Date | string
    pedidos?: PedidoListRelationFilter
    user?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
  }

  export type reservaOrderByWithRelationInput = {
    id?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    valor?: SortOrder
    payed?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pedidos?: pedidoOrderByRelationAggregateInput
    user?: clienteOrderByWithRelationInput
  }

  export type reservaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reservaWhereInput | reservaWhereInput[]
    OR?: reservaWhereInput[]
    NOT?: reservaWhereInput | reservaWhereInput[]
    data_inicio?: DateTimeFilter<"reserva"> | Date | string
    data_fim?: DateTimeFilter<"reserva"> | Date | string
    valor?: FloatFilter<"reserva"> | number
    payed?: BoolFilter<"reserva"> | boolean
    status?: StringFilter<"reserva"> | string
    userId?: StringFilter<"reserva"> | string
    createdAt?: DateTimeFilter<"reserva"> | Date | string
    updatedAt?: DateTimeFilter<"reserva"> | Date | string
    pedidos?: PedidoListRelationFilter
    user?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
  }, "id">

  export type reservaOrderByWithAggregationInput = {
    id?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    valor?: SortOrder
    payed?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: reservaCountOrderByAggregateInput
    _avg?: reservaAvgOrderByAggregateInput
    _max?: reservaMaxOrderByAggregateInput
    _min?: reservaMinOrderByAggregateInput
    _sum?: reservaSumOrderByAggregateInput
  }

  export type reservaScalarWhereWithAggregatesInput = {
    AND?: reservaScalarWhereWithAggregatesInput | reservaScalarWhereWithAggregatesInput[]
    OR?: reservaScalarWhereWithAggregatesInput[]
    NOT?: reservaScalarWhereWithAggregatesInput | reservaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"reserva"> | string
    data_inicio?: DateTimeWithAggregatesFilter<"reserva"> | Date | string
    data_fim?: DateTimeWithAggregatesFilter<"reserva"> | Date | string
    valor?: FloatWithAggregatesFilter<"reserva"> | number
    payed?: BoolWithAggregatesFilter<"reserva"> | boolean
    status?: StringWithAggregatesFilter<"reserva"> | string
    userId?: StringWithAggregatesFilter<"reserva"> | string
    createdAt?: DateTimeWithAggregatesFilter<"reserva"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"reserva"> | Date | string
  }

  export type pedidoWhereInput = {
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    id?: StringFilter<"pedido"> | string
    data?: DateTimeFilter<"pedido"> | Date | string
    valor?: FloatFilter<"pedido"> | number
    reservaId?: StringFilter<"pedido"> | string
    createdAt?: DateTimeFilter<"pedido"> | Date | string
    updatedAt?: DateTimeFilter<"pedido"> | Date | string
    reserva?: XOR<ReservaScalarRelationFilter, reservaWhereInput>
  }

  export type pedidoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    reservaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reserva?: reservaOrderByWithRelationInput
  }

  export type pedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    data?: DateTimeFilter<"pedido"> | Date | string
    valor?: FloatFilter<"pedido"> | number
    reservaId?: StringFilter<"pedido"> | string
    createdAt?: DateTimeFilter<"pedido"> | Date | string
    updatedAt?: DateTimeFilter<"pedido"> | Date | string
    reserva?: XOR<ReservaScalarRelationFilter, reservaWhereInput>
  }, "id">

  export type pedidoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    reservaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: pedidoCountOrderByAggregateInput
    _avg?: pedidoAvgOrderByAggregateInput
    _max?: pedidoMaxOrderByAggregateInput
    _min?: pedidoMinOrderByAggregateInput
    _sum?: pedidoSumOrderByAggregateInput
  }

  export type pedidoScalarWhereWithAggregatesInput = {
    AND?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    OR?: pedidoScalarWhereWithAggregatesInput[]
    NOT?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"pedido"> | string
    data?: DateTimeWithAggregatesFilter<"pedido"> | Date | string
    valor?: FloatWithAggregatesFilter<"pedido"> | number
    reservaId?: StringWithAggregatesFilter<"pedido"> | string
    createdAt?: DateTimeWithAggregatesFilter<"pedido"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"pedido"> | Date | string
  }

  export type clienteCreateInput = {
    id?: string
    nome: string
    email: string
    data_nascimento: Date | string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    endereco?: enderecoCreateNestedOneWithoutUserInput
    telefone?: telefoneCreateNestedOneWithoutUserInput
    reservas?: reservaCreateNestedManyWithoutUserInput
  }

  export type clienteUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    data_nascimento: Date | string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    endereco?: enderecoUncheckedCreateNestedOneWithoutUserInput
    telefone?: telefoneUncheckedCreateNestedOneWithoutUserInput
    reservas?: reservaUncheckedCreateNestedManyWithoutUserInput
  }

  export type clienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: enderecoUpdateOneWithoutUserNestedInput
    telefone?: telefoneUpdateOneWithoutUserNestedInput
    reservas?: reservaUpdateManyWithoutUserNestedInput
  }

  export type clienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: enderecoUncheckedUpdateOneWithoutUserNestedInput
    telefone?: telefoneUncheckedUpdateOneWithoutUserNestedInput
    reservas?: reservaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type clienteCreateManyInput = {
    id?: string
    nome: string
    email: string
    data_nascimento: Date | string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type clienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enderecoCreateInput = {
    id?: string
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: clienteCreateNestedOneWithoutEnderecoInput
  }

  export type enderecoUncheckedCreateInput = {
    id?: string
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type enderecoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: clienteUpdateOneRequiredWithoutEnderecoNestedInput
  }

  export type enderecoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enderecoCreateManyInput = {
    id?: string
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type enderecoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enderecoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type telefoneCreateInput = {
    id?: string
    ddd: string
    numero: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: clienteCreateNestedOneWithoutTelefoneInput
  }

  export type telefoneUncheckedCreateInput = {
    id?: string
    ddd: string
    numero: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type telefoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ddd?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: clienteUpdateOneRequiredWithoutTelefoneNestedInput
  }

  export type telefoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ddd?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type telefoneCreateManyInput = {
    id?: string
    ddd: string
    numero: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type telefoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ddd?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type telefoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ddd?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservaCreateInput = {
    id?: string
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    payed: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedidoCreateNestedManyWithoutReservaInput
    user: clienteCreateNestedOneWithoutReservasInput
  }

  export type reservaUncheckedCreateInput = {
    id?: string
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    payed: boolean
    status: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedidoUncheckedCreateNestedManyWithoutReservaInput
  }

  export type reservaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    payed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedidoUpdateManyWithoutReservaNestedInput
    user?: clienteUpdateOneRequiredWithoutReservasNestedInput
  }

  export type reservaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    payed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedidoUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type reservaCreateManyInput = {
    id?: string
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    payed: boolean
    status: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reservaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    payed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    payed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedidoCreateInput = {
    id?: string
    data: Date | string
    valor: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reserva: reservaCreateNestedOneWithoutPedidosInput
  }

  export type pedidoUncheckedCreateInput = {
    id?: string
    data: Date | string
    valor: number
    reservaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type pedidoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: reservaUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type pedidoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    reservaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedidoCreateManyInput = {
    id?: string
    data: Date | string
    valor: number
    reservaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type pedidoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedidoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    reservaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnderecoNullableScalarRelationFilter = {
    is?: enderecoWhereInput | null
    isNot?: enderecoWhereInput | null
  }

  export type TelefoneNullableScalarRelationFilter = {
    is?: telefoneWhereInput | null
    isNot?: telefoneWhereInput | null
  }

  export type ReservaListRelationFilter = {
    every?: reservaWhereInput
    some?: reservaWhereInput
    none?: reservaWhereInput
  }

  export type reservaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    data_nascimento?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type clienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    data_nascimento?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type clienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    data_nascimento?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ClienteScalarRelationFilter = {
    is?: clienteWhereInput
    isNot?: clienteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type enderecoCountOrderByAggregateInput = {
    id?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type enderecoMaxOrderByAggregateInput = {
    id?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type enderecoMinOrderByAggregateInput = {
    id?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type telefoneCountOrderByAggregateInput = {
    id?: SortOrder
    ddd?: SortOrder
    numero?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type telefoneMaxOrderByAggregateInput = {
    id?: SortOrder
    ddd?: SortOrder
    numero?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type telefoneMinOrderByAggregateInput = {
    id?: SortOrder
    ddd?: SortOrder
    numero?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PedidoListRelationFilter = {
    every?: pedidoWhereInput
    some?: pedidoWhereInput
    none?: pedidoWhereInput
  }

  export type pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reservaCountOrderByAggregateInput = {
    id?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    valor?: SortOrder
    payed?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type reservaAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type reservaMaxOrderByAggregateInput = {
    id?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    valor?: SortOrder
    payed?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type reservaMinOrderByAggregateInput = {
    id?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    valor?: SortOrder
    payed?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type reservaSumOrderByAggregateInput = {
    valor?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReservaScalarRelationFilter = {
    is?: reservaWhereInput
    isNot?: reservaWhereInput
  }

  export type pedidoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    reservaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type pedidoAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type pedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    reservaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type pedidoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    reservaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type pedidoSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type enderecoCreateNestedOneWithoutUserInput = {
    create?: XOR<enderecoCreateWithoutUserInput, enderecoUncheckedCreateWithoutUserInput>
    connectOrCreate?: enderecoCreateOrConnectWithoutUserInput
    connect?: enderecoWhereUniqueInput
  }

  export type telefoneCreateNestedOneWithoutUserInput = {
    create?: XOR<telefoneCreateWithoutUserInput, telefoneUncheckedCreateWithoutUserInput>
    connectOrCreate?: telefoneCreateOrConnectWithoutUserInput
    connect?: telefoneWhereUniqueInput
  }

  export type reservaCreateNestedManyWithoutUserInput = {
    create?: XOR<reservaCreateWithoutUserInput, reservaUncheckedCreateWithoutUserInput> | reservaCreateWithoutUserInput[] | reservaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutUserInput | reservaCreateOrConnectWithoutUserInput[]
    createMany?: reservaCreateManyUserInputEnvelope
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
  }

  export type enderecoUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<enderecoCreateWithoutUserInput, enderecoUncheckedCreateWithoutUserInput>
    connectOrCreate?: enderecoCreateOrConnectWithoutUserInput
    connect?: enderecoWhereUniqueInput
  }

  export type telefoneUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<telefoneCreateWithoutUserInput, telefoneUncheckedCreateWithoutUserInput>
    connectOrCreate?: telefoneCreateOrConnectWithoutUserInput
    connect?: telefoneWhereUniqueInput
  }

  export type reservaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<reservaCreateWithoutUserInput, reservaUncheckedCreateWithoutUserInput> | reservaCreateWithoutUserInput[] | reservaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutUserInput | reservaCreateOrConnectWithoutUserInput[]
    createMany?: reservaCreateManyUserInputEnvelope
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type enderecoUpdateOneWithoutUserNestedInput = {
    create?: XOR<enderecoCreateWithoutUserInput, enderecoUncheckedCreateWithoutUserInput>
    connectOrCreate?: enderecoCreateOrConnectWithoutUserInput
    upsert?: enderecoUpsertWithoutUserInput
    disconnect?: enderecoWhereInput | boolean
    delete?: enderecoWhereInput | boolean
    connect?: enderecoWhereUniqueInput
    update?: XOR<XOR<enderecoUpdateToOneWithWhereWithoutUserInput, enderecoUpdateWithoutUserInput>, enderecoUncheckedUpdateWithoutUserInput>
  }

  export type telefoneUpdateOneWithoutUserNestedInput = {
    create?: XOR<telefoneCreateWithoutUserInput, telefoneUncheckedCreateWithoutUserInput>
    connectOrCreate?: telefoneCreateOrConnectWithoutUserInput
    upsert?: telefoneUpsertWithoutUserInput
    disconnect?: telefoneWhereInput | boolean
    delete?: telefoneWhereInput | boolean
    connect?: telefoneWhereUniqueInput
    update?: XOR<XOR<telefoneUpdateToOneWithWhereWithoutUserInput, telefoneUpdateWithoutUserInput>, telefoneUncheckedUpdateWithoutUserInput>
  }

  export type reservaUpdateManyWithoutUserNestedInput = {
    create?: XOR<reservaCreateWithoutUserInput, reservaUncheckedCreateWithoutUserInput> | reservaCreateWithoutUserInput[] | reservaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutUserInput | reservaCreateOrConnectWithoutUserInput[]
    upsert?: reservaUpsertWithWhereUniqueWithoutUserInput | reservaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reservaCreateManyUserInputEnvelope
    set?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    disconnect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    delete?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    update?: reservaUpdateWithWhereUniqueWithoutUserInput | reservaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reservaUpdateManyWithWhereWithoutUserInput | reservaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reservaScalarWhereInput | reservaScalarWhereInput[]
  }

  export type enderecoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<enderecoCreateWithoutUserInput, enderecoUncheckedCreateWithoutUserInput>
    connectOrCreate?: enderecoCreateOrConnectWithoutUserInput
    upsert?: enderecoUpsertWithoutUserInput
    disconnect?: enderecoWhereInput | boolean
    delete?: enderecoWhereInput | boolean
    connect?: enderecoWhereUniqueInput
    update?: XOR<XOR<enderecoUpdateToOneWithWhereWithoutUserInput, enderecoUpdateWithoutUserInput>, enderecoUncheckedUpdateWithoutUserInput>
  }

  export type telefoneUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<telefoneCreateWithoutUserInput, telefoneUncheckedCreateWithoutUserInput>
    connectOrCreate?: telefoneCreateOrConnectWithoutUserInput
    upsert?: telefoneUpsertWithoutUserInput
    disconnect?: telefoneWhereInput | boolean
    delete?: telefoneWhereInput | boolean
    connect?: telefoneWhereUniqueInput
    update?: XOR<XOR<telefoneUpdateToOneWithWhereWithoutUserInput, telefoneUpdateWithoutUserInput>, telefoneUncheckedUpdateWithoutUserInput>
  }

  export type reservaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<reservaCreateWithoutUserInput, reservaUncheckedCreateWithoutUserInput> | reservaCreateWithoutUserInput[] | reservaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutUserInput | reservaCreateOrConnectWithoutUserInput[]
    upsert?: reservaUpsertWithWhereUniqueWithoutUserInput | reservaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reservaCreateManyUserInputEnvelope
    set?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    disconnect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    delete?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    update?: reservaUpdateWithWhereUniqueWithoutUserInput | reservaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reservaUpdateManyWithWhereWithoutUserInput | reservaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reservaScalarWhereInput | reservaScalarWhereInput[]
  }

  export type clienteCreateNestedOneWithoutEnderecoInput = {
    create?: XOR<clienteCreateWithoutEnderecoInput, clienteUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: clienteCreateOrConnectWithoutEnderecoInput
    connect?: clienteWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type clienteUpdateOneRequiredWithoutEnderecoNestedInput = {
    create?: XOR<clienteCreateWithoutEnderecoInput, clienteUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: clienteCreateOrConnectWithoutEnderecoInput
    upsert?: clienteUpsertWithoutEnderecoInput
    connect?: clienteWhereUniqueInput
    update?: XOR<XOR<clienteUpdateToOneWithWhereWithoutEnderecoInput, clienteUpdateWithoutEnderecoInput>, clienteUncheckedUpdateWithoutEnderecoInput>
  }

  export type clienteCreateNestedOneWithoutTelefoneInput = {
    create?: XOR<clienteCreateWithoutTelefoneInput, clienteUncheckedCreateWithoutTelefoneInput>
    connectOrCreate?: clienteCreateOrConnectWithoutTelefoneInput
    connect?: clienteWhereUniqueInput
  }

  export type clienteUpdateOneRequiredWithoutTelefoneNestedInput = {
    create?: XOR<clienteCreateWithoutTelefoneInput, clienteUncheckedCreateWithoutTelefoneInput>
    connectOrCreate?: clienteCreateOrConnectWithoutTelefoneInput
    upsert?: clienteUpsertWithoutTelefoneInput
    connect?: clienteWhereUniqueInput
    update?: XOR<XOR<clienteUpdateToOneWithWhereWithoutTelefoneInput, clienteUpdateWithoutTelefoneInput>, clienteUncheckedUpdateWithoutTelefoneInput>
  }

  export type pedidoCreateNestedManyWithoutReservaInput = {
    create?: XOR<pedidoCreateWithoutReservaInput, pedidoUncheckedCreateWithoutReservaInput> | pedidoCreateWithoutReservaInput[] | pedidoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutReservaInput | pedidoCreateOrConnectWithoutReservaInput[]
    createMany?: pedidoCreateManyReservaInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type clienteCreateNestedOneWithoutReservasInput = {
    create?: XOR<clienteCreateWithoutReservasInput, clienteUncheckedCreateWithoutReservasInput>
    connectOrCreate?: clienteCreateOrConnectWithoutReservasInput
    connect?: clienteWhereUniqueInput
  }

  export type pedidoUncheckedCreateNestedManyWithoutReservaInput = {
    create?: XOR<pedidoCreateWithoutReservaInput, pedidoUncheckedCreateWithoutReservaInput> | pedidoCreateWithoutReservaInput[] | pedidoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutReservaInput | pedidoCreateOrConnectWithoutReservaInput[]
    createMany?: pedidoCreateManyReservaInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type pedidoUpdateManyWithoutReservaNestedInput = {
    create?: XOR<pedidoCreateWithoutReservaInput, pedidoUncheckedCreateWithoutReservaInput> | pedidoCreateWithoutReservaInput[] | pedidoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutReservaInput | pedidoCreateOrConnectWithoutReservaInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutReservaInput | pedidoUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: pedidoCreateManyReservaInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutReservaInput | pedidoUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutReservaInput | pedidoUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type clienteUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<clienteCreateWithoutReservasInput, clienteUncheckedCreateWithoutReservasInput>
    connectOrCreate?: clienteCreateOrConnectWithoutReservasInput
    upsert?: clienteUpsertWithoutReservasInput
    connect?: clienteWhereUniqueInput
    update?: XOR<XOR<clienteUpdateToOneWithWhereWithoutReservasInput, clienteUpdateWithoutReservasInput>, clienteUncheckedUpdateWithoutReservasInput>
  }

  export type pedidoUncheckedUpdateManyWithoutReservaNestedInput = {
    create?: XOR<pedidoCreateWithoutReservaInput, pedidoUncheckedCreateWithoutReservaInput> | pedidoCreateWithoutReservaInput[] | pedidoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutReservaInput | pedidoCreateOrConnectWithoutReservaInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutReservaInput | pedidoUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: pedidoCreateManyReservaInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutReservaInput | pedidoUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutReservaInput | pedidoUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type reservaCreateNestedOneWithoutPedidosInput = {
    create?: XOR<reservaCreateWithoutPedidosInput, reservaUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: reservaCreateOrConnectWithoutPedidosInput
    connect?: reservaWhereUniqueInput
  }

  export type reservaUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<reservaCreateWithoutPedidosInput, reservaUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: reservaCreateOrConnectWithoutPedidosInput
    upsert?: reservaUpsertWithoutPedidosInput
    connect?: reservaWhereUniqueInput
    update?: XOR<XOR<reservaUpdateToOneWithWhereWithoutPedidosInput, reservaUpdateWithoutPedidosInput>, reservaUncheckedUpdateWithoutPedidosInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type enderecoCreateWithoutUserInput = {
    id?: string
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type enderecoUncheckedCreateWithoutUserInput = {
    id?: string
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type enderecoCreateOrConnectWithoutUserInput = {
    where: enderecoWhereUniqueInput
    create: XOR<enderecoCreateWithoutUserInput, enderecoUncheckedCreateWithoutUserInput>
  }

  export type telefoneCreateWithoutUserInput = {
    id?: string
    ddd: string
    numero: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type telefoneUncheckedCreateWithoutUserInput = {
    id?: string
    ddd: string
    numero: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type telefoneCreateOrConnectWithoutUserInput = {
    where: telefoneWhereUniqueInput
    create: XOR<telefoneCreateWithoutUserInput, telefoneUncheckedCreateWithoutUserInput>
  }

  export type reservaCreateWithoutUserInput = {
    id?: string
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    payed: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedidoCreateNestedManyWithoutReservaInput
  }

  export type reservaUncheckedCreateWithoutUserInput = {
    id?: string
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    payed: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedidoUncheckedCreateNestedManyWithoutReservaInput
  }

  export type reservaCreateOrConnectWithoutUserInput = {
    where: reservaWhereUniqueInput
    create: XOR<reservaCreateWithoutUserInput, reservaUncheckedCreateWithoutUserInput>
  }

  export type reservaCreateManyUserInputEnvelope = {
    data: reservaCreateManyUserInput | reservaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type enderecoUpsertWithoutUserInput = {
    update: XOR<enderecoUpdateWithoutUserInput, enderecoUncheckedUpdateWithoutUserInput>
    create: XOR<enderecoCreateWithoutUserInput, enderecoUncheckedCreateWithoutUserInput>
    where?: enderecoWhereInput
  }

  export type enderecoUpdateToOneWithWhereWithoutUserInput = {
    where?: enderecoWhereInput
    data: XOR<enderecoUpdateWithoutUserInput, enderecoUncheckedUpdateWithoutUserInput>
  }

  export type enderecoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enderecoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type telefoneUpsertWithoutUserInput = {
    update: XOR<telefoneUpdateWithoutUserInput, telefoneUncheckedUpdateWithoutUserInput>
    create: XOR<telefoneCreateWithoutUserInput, telefoneUncheckedCreateWithoutUserInput>
    where?: telefoneWhereInput
  }

  export type telefoneUpdateToOneWithWhereWithoutUserInput = {
    where?: telefoneWhereInput
    data: XOR<telefoneUpdateWithoutUserInput, telefoneUncheckedUpdateWithoutUserInput>
  }

  export type telefoneUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ddd?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type telefoneUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ddd?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservaUpsertWithWhereUniqueWithoutUserInput = {
    where: reservaWhereUniqueInput
    update: XOR<reservaUpdateWithoutUserInput, reservaUncheckedUpdateWithoutUserInput>
    create: XOR<reservaCreateWithoutUserInput, reservaUncheckedCreateWithoutUserInput>
  }

  export type reservaUpdateWithWhereUniqueWithoutUserInput = {
    where: reservaWhereUniqueInput
    data: XOR<reservaUpdateWithoutUserInput, reservaUncheckedUpdateWithoutUserInput>
  }

  export type reservaUpdateManyWithWhereWithoutUserInput = {
    where: reservaScalarWhereInput
    data: XOR<reservaUpdateManyMutationInput, reservaUncheckedUpdateManyWithoutUserInput>
  }

  export type reservaScalarWhereInput = {
    AND?: reservaScalarWhereInput | reservaScalarWhereInput[]
    OR?: reservaScalarWhereInput[]
    NOT?: reservaScalarWhereInput | reservaScalarWhereInput[]
    id?: StringFilter<"reserva"> | string
    data_inicio?: DateTimeFilter<"reserva"> | Date | string
    data_fim?: DateTimeFilter<"reserva"> | Date | string
    valor?: FloatFilter<"reserva"> | number
    payed?: BoolFilter<"reserva"> | boolean
    status?: StringFilter<"reserva"> | string
    userId?: StringFilter<"reserva"> | string
    createdAt?: DateTimeFilter<"reserva"> | Date | string
    updatedAt?: DateTimeFilter<"reserva"> | Date | string
  }

  export type clienteCreateWithoutEnderecoInput = {
    id?: string
    nome: string
    email: string
    data_nascimento: Date | string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    telefone?: telefoneCreateNestedOneWithoutUserInput
    reservas?: reservaCreateNestedManyWithoutUserInput
  }

  export type clienteUncheckedCreateWithoutEnderecoInput = {
    id?: string
    nome: string
    email: string
    data_nascimento: Date | string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    telefone?: telefoneUncheckedCreateNestedOneWithoutUserInput
    reservas?: reservaUncheckedCreateNestedManyWithoutUserInput
  }

  export type clienteCreateOrConnectWithoutEnderecoInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutEnderecoInput, clienteUncheckedCreateWithoutEnderecoInput>
  }

  export type clienteUpsertWithoutEnderecoInput = {
    update: XOR<clienteUpdateWithoutEnderecoInput, clienteUncheckedUpdateWithoutEnderecoInput>
    create: XOR<clienteCreateWithoutEnderecoInput, clienteUncheckedCreateWithoutEnderecoInput>
    where?: clienteWhereInput
  }

  export type clienteUpdateToOneWithWhereWithoutEnderecoInput = {
    where?: clienteWhereInput
    data: XOR<clienteUpdateWithoutEnderecoInput, clienteUncheckedUpdateWithoutEnderecoInput>
  }

  export type clienteUpdateWithoutEnderecoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: telefoneUpdateOneWithoutUserNestedInput
    reservas?: reservaUpdateManyWithoutUserNestedInput
  }

  export type clienteUncheckedUpdateWithoutEnderecoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: telefoneUncheckedUpdateOneWithoutUserNestedInput
    reservas?: reservaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type clienteCreateWithoutTelefoneInput = {
    id?: string
    nome: string
    email: string
    data_nascimento: Date | string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    endereco?: enderecoCreateNestedOneWithoutUserInput
    reservas?: reservaCreateNestedManyWithoutUserInput
  }

  export type clienteUncheckedCreateWithoutTelefoneInput = {
    id?: string
    nome: string
    email: string
    data_nascimento: Date | string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    endereco?: enderecoUncheckedCreateNestedOneWithoutUserInput
    reservas?: reservaUncheckedCreateNestedManyWithoutUserInput
  }

  export type clienteCreateOrConnectWithoutTelefoneInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutTelefoneInput, clienteUncheckedCreateWithoutTelefoneInput>
  }

  export type clienteUpsertWithoutTelefoneInput = {
    update: XOR<clienteUpdateWithoutTelefoneInput, clienteUncheckedUpdateWithoutTelefoneInput>
    create: XOR<clienteCreateWithoutTelefoneInput, clienteUncheckedCreateWithoutTelefoneInput>
    where?: clienteWhereInput
  }

  export type clienteUpdateToOneWithWhereWithoutTelefoneInput = {
    where?: clienteWhereInput
    data: XOR<clienteUpdateWithoutTelefoneInput, clienteUncheckedUpdateWithoutTelefoneInput>
  }

  export type clienteUpdateWithoutTelefoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: enderecoUpdateOneWithoutUserNestedInput
    reservas?: reservaUpdateManyWithoutUserNestedInput
  }

  export type clienteUncheckedUpdateWithoutTelefoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: enderecoUncheckedUpdateOneWithoutUserNestedInput
    reservas?: reservaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type pedidoCreateWithoutReservaInput = {
    id?: string
    data: Date | string
    valor: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type pedidoUncheckedCreateWithoutReservaInput = {
    id?: string
    data: Date | string
    valor: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type pedidoCreateOrConnectWithoutReservaInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutReservaInput, pedidoUncheckedCreateWithoutReservaInput>
  }

  export type pedidoCreateManyReservaInputEnvelope = {
    data: pedidoCreateManyReservaInput | pedidoCreateManyReservaInput[]
    skipDuplicates?: boolean
  }

  export type clienteCreateWithoutReservasInput = {
    id?: string
    nome: string
    email: string
    data_nascimento: Date | string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    endereco?: enderecoCreateNestedOneWithoutUserInput
    telefone?: telefoneCreateNestedOneWithoutUserInput
  }

  export type clienteUncheckedCreateWithoutReservasInput = {
    id?: string
    nome: string
    email: string
    data_nascimento: Date | string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    endereco?: enderecoUncheckedCreateNestedOneWithoutUserInput
    telefone?: telefoneUncheckedCreateNestedOneWithoutUserInput
  }

  export type clienteCreateOrConnectWithoutReservasInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutReservasInput, clienteUncheckedCreateWithoutReservasInput>
  }

  export type pedidoUpsertWithWhereUniqueWithoutReservaInput = {
    where: pedidoWhereUniqueInput
    update: XOR<pedidoUpdateWithoutReservaInput, pedidoUncheckedUpdateWithoutReservaInput>
    create: XOR<pedidoCreateWithoutReservaInput, pedidoUncheckedCreateWithoutReservaInput>
  }

  export type pedidoUpdateWithWhereUniqueWithoutReservaInput = {
    where: pedidoWhereUniqueInput
    data: XOR<pedidoUpdateWithoutReservaInput, pedidoUncheckedUpdateWithoutReservaInput>
  }

  export type pedidoUpdateManyWithWhereWithoutReservaInput = {
    where: pedidoScalarWhereInput
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyWithoutReservaInput>
  }

  export type pedidoScalarWhereInput = {
    AND?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    OR?: pedidoScalarWhereInput[]
    NOT?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    id?: StringFilter<"pedido"> | string
    data?: DateTimeFilter<"pedido"> | Date | string
    valor?: FloatFilter<"pedido"> | number
    reservaId?: StringFilter<"pedido"> | string
    createdAt?: DateTimeFilter<"pedido"> | Date | string
    updatedAt?: DateTimeFilter<"pedido"> | Date | string
  }

  export type clienteUpsertWithoutReservasInput = {
    update: XOR<clienteUpdateWithoutReservasInput, clienteUncheckedUpdateWithoutReservasInput>
    create: XOR<clienteCreateWithoutReservasInput, clienteUncheckedCreateWithoutReservasInput>
    where?: clienteWhereInput
  }

  export type clienteUpdateToOneWithWhereWithoutReservasInput = {
    where?: clienteWhereInput
    data: XOR<clienteUpdateWithoutReservasInput, clienteUncheckedUpdateWithoutReservasInput>
  }

  export type clienteUpdateWithoutReservasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: enderecoUpdateOneWithoutUserNestedInput
    telefone?: telefoneUpdateOneWithoutUserNestedInput
  }

  export type clienteUncheckedUpdateWithoutReservasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: enderecoUncheckedUpdateOneWithoutUserNestedInput
    telefone?: telefoneUncheckedUpdateOneWithoutUserNestedInput
  }

  export type reservaCreateWithoutPedidosInput = {
    id?: string
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    payed: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: clienteCreateNestedOneWithoutReservasInput
  }

  export type reservaUncheckedCreateWithoutPedidosInput = {
    id?: string
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    payed: boolean
    status: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reservaCreateOrConnectWithoutPedidosInput = {
    where: reservaWhereUniqueInput
    create: XOR<reservaCreateWithoutPedidosInput, reservaUncheckedCreateWithoutPedidosInput>
  }

  export type reservaUpsertWithoutPedidosInput = {
    update: XOR<reservaUpdateWithoutPedidosInput, reservaUncheckedUpdateWithoutPedidosInput>
    create: XOR<reservaCreateWithoutPedidosInput, reservaUncheckedCreateWithoutPedidosInput>
    where?: reservaWhereInput
  }

  export type reservaUpdateToOneWithWhereWithoutPedidosInput = {
    where?: reservaWhereInput
    data: XOR<reservaUpdateWithoutPedidosInput, reservaUncheckedUpdateWithoutPedidosInput>
  }

  export type reservaUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    payed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: clienteUpdateOneRequiredWithoutReservasNestedInput
  }

  export type reservaUncheckedUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    payed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservaCreateManyUserInput = {
    id?: string
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    payed: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reservaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    payed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedidoUpdateManyWithoutReservaNestedInput
  }

  export type reservaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    payed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedidoUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type reservaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    payed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedidoCreateManyReservaInput = {
    id?: string
    data: Date | string
    valor: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type pedidoUpdateWithoutReservaInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedidoUncheckedUpdateWithoutReservaInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedidoUncheckedUpdateManyWithoutReservaInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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