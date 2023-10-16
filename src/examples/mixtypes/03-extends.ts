type answer_1 = 64 extends number ? true : false;

type answer_2 = number extends 64 ? true : false;

type answer_3 = string[] extends any ? true : false;

type answer_4 = string[] extends any[] ? true : false;

type answer_5 = never extends any ? true : false;

type answer_6 = any extends any ? true : false;

type answer_7 = Date extends { new (...args: any[]): any } ? true : false;
// newable structure /  it check that we can use  "new" with extending type
// we can use "new" for Date  interface

type answer_8 = typeof Date extends { new (...args: any[]): any } ? true : false;
//  typeof Date give us (Enables basic storage and retrieval of dates and times.)
// and ability to create classes

export {};
