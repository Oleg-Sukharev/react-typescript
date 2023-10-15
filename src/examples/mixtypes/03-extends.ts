type answer_1 = 64 extends number ? true : false;

type answer_2 = number extends 64 ? true : false;

type answer_3 = string[] extends any ? true : false;

type answer_4 = string[] extends any[] ? true : false;

type answer_5 = never extends any ? true : false;

type answer_6 = any extends any ? true : false;

export {};
