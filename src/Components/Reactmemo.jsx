import React from "react";

const Reactmemo = () => {
    return (
        <div className="content-block">
            <h1 className="content-title">React.memo</h1>
            <div className="content-code"><pre><code>{`
            const MyComponent = React.memo(function MyComponent(props) {
                /* рендер с использованием пропсов */
            });
            `}</code></pre></div>

            <div className="content-text" >
                <p>React.memo — это компонент высшего порядка. </p>
                <p>Компонент высшего порядка — это функция, которая принимает компонент и возвращает новый компонент.</p>
                <p>Если ваш компонент всегда рендерит одно и то же при неменяющихся пропсах, вы можете обернуть его в вызов React.memo для повышения производительности в некоторых случаях, мемоизируя тем самым результат. Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга.</p>
                <p>React.memo затрагивает только изменения пропсов. Если функциональный компонент обёрнут в React.memo и использует useState, useReducer или useContext, он будет повторно рендериться при изменении состояния или контекста.</p>
                <p>По умолчанию он поверхностно сравнивает вложенные объекты в объекте props. Если вы хотите контролировать сравнение, вы можете передать свою функцию сравнения в качестве второго аргумента.</p>

            </div>

            <div className="content-code"><pre><code>{`
        function MyComponent(props) {
            /* рендер с использованием пропсов */
          }
          function areEqual(prevProps, nextProps) {
            /*
            возвращает true, если nextProps рендерит
            тот же результат что и prevProps,
            иначе возвращает false
            */
        }
        export default React.memo(MyComponent, areEqual);
      `}
            </code></pre></div>
            <div className="content-text">
                <p>Этот метод предназначен только для оптимизации производительности.</p>
                <p>Аналогом в классовых компонентах выступает метод shouldComponentUpdate()</p>
            </div>
            <div className="content-code"><pre><code>{`
           shouldComponentUpdate(nextProps, nextState) {
            return !shallowEqual (nextProps, this.props) ||
                   !shallowEqual (nextState, this.state);
        }
      `}
            </code></pre></div>

        </div>

    )
}

export default Reactmemo;