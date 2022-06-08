import { FC } from "react";

interface NewProps {}

// the element in the list of the news
export const New: FC<NewProps> = () => {
  return (
    <div>
       {/* When click on this redirect to the main new post */}
      <div>
        <div>
          <i>Icono</i>
          <p>Hora del post </p>
        </div>
        <p>Este es un post</p>
      </div>
      {/* When click on this add to the local storage */}
      <div>
        <i>Corazon</i>
      </div>
    </div>
  );
};
