import {fakeName, randomJobTitle, randomNumber} from "../lib/fake";
import {times} from "ramda";

export function fakePersonRecord() {
  return {
    name: fakeName(),
    balance: randomNumber(),
    jobTitle: randomJobTitle(),
  }
}

export function fakePersonList() {
  return times(fakePersonRecord, 100)
}