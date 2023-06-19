/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Pda,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  publicKey as toPublicKey,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  publicKey as publicKeySerializer,
  string,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { Key, KeyArgs, getKeySerializer } from '../types';

export type MyPdaAccount = Account<MyPdaAccountAccountData>;

export type MyPdaAccountAccountData = { key: Key; bump: number };

export type MyPdaAccountAccountDataArgs = { bump: number };

/** @deprecated Use `getMyPdaAccountAccountDataSerializer()` without any argument instead. */
export function getMyPdaAccountAccountDataSerializer(
  _context: object
): Serializer<MyPdaAccountAccountDataArgs, MyPdaAccountAccountData>;
export function getMyPdaAccountAccountDataSerializer(): Serializer<
  MyPdaAccountAccountDataArgs,
  MyPdaAccountAccountData
>;
export function getMyPdaAccountAccountDataSerializer(
  _context: object = {}
): Serializer<MyPdaAccountAccountDataArgs, MyPdaAccountAccountData> {
  return mapSerializer<
    MyPdaAccountAccountDataArgs,
    any,
    MyPdaAccountAccountData
  >(
    struct<MyPdaAccountAccountData>(
      [
        ['key', getKeySerializer()],
        ['bump', u8()],
      ],
      { description: 'MyPdaAccountAccountData' }
    ),
    (value) => ({ ...value, key: Key.MyPdaAccount })
  ) as Serializer<MyPdaAccountAccountDataArgs, MyPdaAccountAccountData>;
}

/** @deprecated Use `deserializeMyPdaAccount(rawAccount)` without any context instead. */
export function deserializeMyPdaAccount(
  context: object,
  rawAccount: RpcAccount
): MyPdaAccount;
export function deserializeMyPdaAccount(rawAccount: RpcAccount): MyPdaAccount;
export function deserializeMyPdaAccount(
  context: RpcAccount | object,
  rawAccount?: RpcAccount
): MyPdaAccount {
  return deserializeAccount(
    rawAccount ?? (context as RpcAccount),
    getMyPdaAccountAccountDataSerializer()
  );
}

export async function fetchMyPdaAccount(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<MyPdaAccount> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  assertAccountExists(maybeAccount, 'MyPdaAccount');
  return deserializeMyPdaAccount(maybeAccount);
}

export async function safeFetchMyPdaAccount(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<MyPdaAccount | null> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  return maybeAccount.exists ? deserializeMyPdaAccount(maybeAccount) : null;
}

export async function fetchAllMyPdaAccount(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<MyPdaAccount[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'MyPdaAccount');
    return deserializeMyPdaAccount(maybeAccount);
  });
}

export async function safeFetchAllMyPdaAccount(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<MyPdaAccount[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) => deserializeMyPdaAccount(maybeAccount as RpcAccount));
}

export function getMyPdaAccountGpaBuilder(
  context: Pick<Context, 'rpc' | 'programs'>
) {
  const programId = context.programs.getPublicKey(
    'mplProjectName',
    'MyProgram1111111111111111111111111111111111'
  );
  return gpaBuilder(context, programId)
    .registerFields<{ key: KeyArgs; bump: number }>({
      key: [0, getKeySerializer()],
      bump: [1, u8()],
    })
    .deserializeUsing<MyPdaAccount>((account) =>
      deserializeMyPdaAccount(account)
    )
    .whereField('key', Key.MyPdaAccount);
}

export function getMyPdaAccountSize(): number {
  return 2;
}

export function findMyPdaAccountPda(
  context: Pick<Context, 'eddsa' | 'programs'>,
  seeds: {
    /** The address of the authority */
    authority: PublicKey;
    /** The name of the account */
    name: string;
  }
): Pda {
  const programId = context.programs.getPublicKey(
    'mplProjectName',
    'MyProgram1111111111111111111111111111111111'
  );
  return context.eddsa.findPda(programId, [
    string({ size: 'variable' }).serialize('myPdaAccount'),
    publicKeySerializer().serialize(programId),
    publicKeySerializer().serialize(seeds.authority),
    string({ size: 'variable' }).serialize(seeds.name),
  ]);
}

export async function fetchMyPdaAccountFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  seeds: Parameters<typeof findMyPdaAccountPda>[1],
  options?: RpcGetAccountOptions
): Promise<MyPdaAccount> {
  return fetchMyPdaAccount(
    context,
    findMyPdaAccountPda(context, seeds),
    options
  );
}

export async function safeFetchMyPdaAccountFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  seeds: Parameters<typeof findMyPdaAccountPda>[1],
  options?: RpcGetAccountOptions
): Promise<MyPdaAccount | null> {
  return safeFetchMyPdaAccount(
    context,
    findMyPdaAccountPda(context, seeds),
    options
  );
}
