/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Serializer,
  struct,
  u16,
  u32,
} from '@metaplex-foundation/umi/serializers';

export type MyData = { foo: number; bar: number };

export type MyDataArgs = MyData;

/** @deprecated Use `getMyDataSerializer()` without any argument instead. */
export function getMyDataSerializer(
  _context: object
): Serializer<MyDataArgs, MyData>;
export function getMyDataSerializer(): Serializer<MyDataArgs, MyData>;
export function getMyDataSerializer(
  _context: object = {}
): Serializer<MyDataArgs, MyData> {
  return struct<MyData>(
    [
      ['foo', u16()],
      ['bar', u32()],
    ],
    { description: 'MyData' }
  ) as Serializer<MyDataArgs, MyData>;
}
