import React from "react";

const Props = () => {
    return (
        <div className="content-block">
            <h1 className="content-title">Props</h1>
            <div className="content-text">
                <p>То, что мы называем аргументами в мире функций, в мире компонентов называется свойствами</p>
                <p>Функциональные компоненты свойства принимают в качестве аргумента.</p>
                <p>Props представляют собой объект, содержащие свойства.</p>
                <p>Обратиться к ним можно - props.имя-свойства</p>
                <p>Props - только для чтения.</p>
            </div>
            <div className="content-code">
                <pre><code>{` 
                 function Welcome(props) {
                return <h1>Привет, {props.name}</h1>;
            }
            `
                }</code></pre>
            </div>
            <div className="content-text">
                <p>Классовые компоненты свойства принимают по умолчанию и обратиться к ним можно с помощью this.props.имя-свойства.</p>
            </div>
            <div className="content-code">
                <pre><code>{`  
                class Welcome extends React.Component {
                render() {
                    return <h1>Привет, {this.props.name}</h1>;
                }
            }
            `}</code></pre>
            </div>
            <div className="content-text">
                <p>Элементы могут описывать и наши собственные компоненты:</p>
            </div>
            <div className="content-code">
                <pre><code>{` 
                const element = <Welcome name="Алиса" />;
                 `}</code></pre>
            </div>
            <div className="content-text">
                <p>Когда React встречает подобный элемент, он собирает все JSX-атрибуты и дочерние элементы в один объект и передаёт их нашему компоненту. Этот объект называется «пропсы».</p>
                <p>Например, этот компонент выведет «Привет, Алиса» на страницу:</p>
            </div>
            <div className="content-code">
                <pre><code>{` 
            function Welcome (props) {
                return <h1> Привет, {props.name}</h1>;
            }

            const element = <Welcome name="Алиса" />;
            ReactDOM.render(
                element,
                document.getElementById('root')
            );
            
                 `}</code></pre>
            </div>
            <div className="content-text">

                <ol>
                    <li>
                        Мы передаём React-элемент<code>{`<Welcome name="Алиса"> в ReactDOM.render()`}</code>
                    </li>
                    <li>React вызывает наш компонент Welcome с пропсами <code>{`{name: 'Алиса'}</code>`}</code>.</li>
                    <li>Наш компонент Welcome возвращает элемент<code> {`<h1>Привет, Алиса</h1> в качестве результата`}</code>.</li>
                    <li>React DOM делает минимальные изменения в DOM, чтобы получилось <code>{`<h1>Привет, Алиса</h1>`}</code>.</li>
                </ol>
            </div>
        </div>
    )
}

export default Props;