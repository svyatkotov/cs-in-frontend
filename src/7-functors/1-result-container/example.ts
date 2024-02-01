import { Result } from './result-container';

const result = new Result(() => 10);
result
    .map((el) => el * 2)
    .flatMap((el) => new Result(() => el + 5))
    .catch((err) => console.log(err)) // ignored
    .map((el) => el * 3)
    .flatMap((el) => Result.error(el))
    .catch((err) => console.log(err)); // Error occurred with value 75
