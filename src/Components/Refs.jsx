import React from "react";

const Refs = () => {
    return (
        <div className="content-block">
            <h1 className="content-title">Refs</h1>
            <div className="content-text">
                <p>Refs (далее просто «ссылки») предоставляет способ доступа к DOM-узлам или React-элементам, созданным в методе render().</p>
                <p>Есть несколько хороших примеров использования ссылок:</p>
                <ul>
                    <li>Управление фокусом, выделение текста или воспроизведение медиаресурсами.</li>
                    <li>Выполнение анимаций в императивном подходе.</li>
                    <li>Интеграция со сторонними библиотеками, взаимодействующие с DOM.</li>
                </ul>
                <p>Ссылки создаются с использованием React.createRef() и добавляются к React-элементам с помощью атрибута ref. Ссылки обычно присваиваются свойству экземпляра, когда компонент создаётся таким образом, чтобы на них можно было ссылаться по всему компоненту.</p>
            </div>
            <div className="content-code"><pre><code>{`
            class MyComponent extends React.Component {
                constructor(props) {
                  super(props);
                  this.myRef = React.createRef();
                 }
                render() {
                  return <div ref={this.myRef} />;
                 }}
            `}</code></pre></div>
            <div className="content-text"><p>В функциональных компонентах используется хук useRef:</p></div>
            <div className="content-code"><pre><code>{` 
        import { useRef } from 'react';

         function MyComponent () {
            const refContainer = useRef(initialValue);
            return (
                <div ref={refContainer} />
                 );
                  }
`}</code></pre></div>
            <div className="content-text"><p>useRef возвращает изменяемый ref-объект, свойство .current которого инициализируется переданным аргументом (initialValue). Возвращённый объект будет сохраняться в течение всего времени жизни компонента.</p></div>

        </div>
    )
}

export default Refs