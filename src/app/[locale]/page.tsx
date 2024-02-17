import MainTitle from "@/components/Common/Titles/MainTitle/MainTitle";
import classes from "./page.module.css";
import { stackList } from "@/data";
import StackItem from "@/components/Common/Items/StackItem/StackItem";

export default function About() {
  return (
    <div className={classes.container}>
      <MainTitle title="Обо мне" />
      <p className={classes.about}>
        Разработчик веб и мобильных приложений с использованием React.js,
        React-Native, Next.js. Особо ценю создание сложных,
        высокопроизводительных приложений, работу в команде профессионалов.
      </p>
      <h2 className={classes.subtitle}>Мой технический стек</h2>
      <ul className={classes.list}>
        {stackList.map((stack) => {
          return <StackItem key={stack.name} {...stack} />;
        })}
      </ul>
    </div>
  );
}
