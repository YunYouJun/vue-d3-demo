export interface Alphabet {
  /**
   * 字母
   */
  letter: string;
  /**
   * 频率
   */
  frequency: number;
}

export type alphabetData = Alphabet[];

interface BaseBar {
  name: string;
  value: number;
}
