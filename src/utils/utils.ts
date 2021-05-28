const WORD_READING_COUNT_PER_MINUTE = 200;

export const calculateReadingTimeEstimation = (wordCount: number): number => {
    return Math.max(Math.ceil(wordCount / WORD_READING_COUNT_PER_MINUTE), 1);
};
