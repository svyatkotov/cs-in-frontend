# Домашнее задание к лекции № 8 - Обработка ошибок. Простые и контейнерные типы данных. Функторы и монады.

1. Необходимо создать контейнер Result с двумя состояниями Error и Ok. Контейнер должен обладать характеристиками монады и функтора.

   ```js
   const result = new Result(() => 10);
   result.map((el) => el * 2).flatMap((el) => Result.error(el)).catch((err) => console.log(err));
   ```

2. Необходимо используя генераторы создать аналог async/await для контейнера Result.

   ```js
   exec(function* main() {
     const result = new Result(() => 10);
     console.log(yield result.map((el) => el * 2));
   });
   ```

3. Необходимо расширить логику async/await из прошлого задания, чтобы сделать её универсальной и добавить поддержку еще нескольких контейнеров.

   ```js
   exec(function* main() {
     const result = new Result(() => 10);
     
     console.log(yield result.map((el) => el * 2));
     
     console.log(yield Promise.resolve(10));
   });
   ```
