import { Result } from './result-container';

const result = new Result(() => 10);
result
    .map((el) => el * 2)
    .flatMap((el) => new Result(() => el + 5))
    .catch((err) => console.log(err)) // ignored
    .map((el) => new Result(() => el + '10'))
    .map(el => el.unwrap())
    .flatMap((el) => Result.error(el))
    .catch((err) => console.log(err)); // Error occurred with value 2510
