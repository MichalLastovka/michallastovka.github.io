import {type JSX} from "react";


interface StackItemProps {
    title: string;  // 'name' is required and should be of type string
    description: string;
    use: string;
    icon: JSX.Element;
}

export const StackItem = (props: StackItemProps) => {
    return (
        <>
            <style>
                {`
            .Itemcard {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.Itemcard svg {
  width: 100px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.Itemcard:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.Itemcard__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.Itemcard:hover .Itemcard__content {
  transform: rotateX(0deg);
}

.Itemcard__title {
  margin: 10px;
  font-size: 30px;
  color: #333;
  font-weight: 700;
}

.Itemcard__use {
  margin: 10px 0 0;
  font-size: 14px;
  color: #333;
  font-weight: 200;
}

.Itemcard__usespan {
  margin: 10px 0 0;
  font-size: 14px;
  color: #333;
  font-weight: 700;
}

.Itemcard:hover svg {
  scale: 0;
}

.Itemcard__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
}

            `
                }
            </style>
            <div className="Itemcard">
                {props.icon}
                <p className="Itemcard__title">{props.title}</p>
                <div className="Itemcard__content">
                    <p className="Itemcard__description">{props.description}</p>
                    <p className="Itemcard__use"><span className={"Itemcard__usespan"}>Use: </span>{props.use}</p>
                </div>
            </div>
        </>
    )
}