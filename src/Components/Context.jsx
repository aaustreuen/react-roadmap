import React from "react";

const Context = () => {
    return (
        <div className="content-block">
            <h1 className="content-title">Context</h1>
            <div className="content-text">
                <p>
                    Контекст разработан для передачи данных для всего дерева React-компонентов, не прокидывая через пропсы.
                </p>
                <p>
                    Создать контекст:
                </p>
            </div>
            <div className="content-code">
                <pre>
                    <code>
                        {`
                         const MyContext = React.createContext(defaultValue);
                        `}
                    </code>
                </pre>
            </div>
            <div className="content-text">
                <p>defaultValue - дефолтное значение или объект для получения через контекст</p>
                <p>Вызывая React.createContext мы получаем объект, который содержит два компонента:</p>
                <p>1. Компонент Provider. Благодаря ему все дочерние компоненты могут получать значения, которые мы ему передаем.</p>
            </div>
            <div className="content-code">
                <pre>
                    <code>
                        {`
                        <MyContext.Provider value={value}> </MyContext.Provider>
                        `
                        }
                    </code>
                </pre>
            </div>
            <div className="content-text">
                <p>Компонент Provider принимает проп value, который будет передан во все компоненты, использующие этот контекст и являющиеся потомками этого компонента Provider. Один Provider может быть связан с несколькими компонентами, потребляющими контекст. Так же компоненты Provider могут быть вложены друг в друга, переопределяя значение контекста глубже в дереве.</p>
                <p>2. Компонент Consumer - это React-компонент, который подписывается на изменения контекста.</p>
                <p>Consumer принимает функцию в качестве дочернего компонента. Эта функция принимает текущее значение контекста и возвращает React-компонент. Передаваемый аргумент value будет равен ближайшему (вверх по дереву) значению этого контекста, а именно пропу value компонента Provider. Если такого компонента Provider не существует, аргумент value будет равен значению defaultValue, которое было передано в createContext().</p>
            </div>
            <div className="content-code">
                <pre>
                    <code>
                        {`
                         <MyContext.Consumer>
            {value => /* отрендерить что-то, используя значение контекста */}
          </MyContext.Consumer>
        `
        }
                    </code>
                </pre>
            </div>
            <div className="content-text">
                <p>Хук useContext. Принимает один параметр - это объект контекста, получаемый при вызове React.createContext и возвращает текущее значение контекста для этого контекста.</p>
                <p>Текущее значение контекста определяется пропом value ближайшего MyContext.Provider над вызывающим компонентом в дереве.</p>
            </div>
            <div className="content-code">
                <pre>
                    <code>
                        {`
                        const value = useContext(MyContext); 
                        `}
                    </code>
                </pre>
            </div>
            <div className="content-text">
                <p>Компонент, вызывающий useContext, всегда будет перерендериваться при изменении значения контекста. Если повторный рендер компонента затратен, вы можете оптимизировать его с помощью мемоизации.</p>
                <p>Контекст лучше всего создавать в отдельном файле.</p>
            </div>
        </div>
    )
}

export default Context