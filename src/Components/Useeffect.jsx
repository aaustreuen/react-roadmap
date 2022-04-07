import React from "react";

const Useeffect = () => {
    return (
        <div className="content-block">
            <h1 className="content-title">useEffect</h1>
            <div className="content-text">
                <p>Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.</p>
            </div>
            <div className="content-code"><pre><code>{`
               import {useEffect} from 'react';
            `}
            </code></pre></div>
            <div className="content-text">
                <p>Хук позволяет использовать 3 метода жизненного цикла:</p>
                <ul>
                    <li>componentDidMount()</li>
                    <li>componentDidUpdate(prevProps, prevState)</li>
                    <li>componentWillUnmount()</li>
                </ul>
                <p>
                    UseEffect принимает в качестве первого параметра функцию, в качестве второго - [ ] (аналог componentDidMount).
                </p>
            </div>
            <div className="content-code"><pre><code>{`
                          useEffect ( () => { }, [])
            `}
            </code></pre></div>
            <div className="content-text">
                <p>UseEffect принимает в качестве первого параметра функцию, в качестве второго - массив с зависимостью (или несколькими) (аналог componentDidUpdate).</p>
            </div>
            <div className="content-code"><pre><code>{`
                         useEffect ( () => { }, [name])
            `}
            </code></pre></div>
            <div className="content-text">
                <p>UseEffect принимает в качестве первого параметра функцию, второго параметра - нет (аналог componentDidMount + componentDidUpdate).</p>
            </div>
            <div className="content-code"><pre><code>{`
                          useEffect ( () => { } )
            `}
            </code></pre></div>
            <div className="content-text">
                <p>UseEffect принимает в качестве первого параметра функцию, которая возвращает другую функцию (аналог componentWillUnmount).

                </p>
            </div>
            <div className="content-code"><pre><code>{`
                           useEffect ( () => {
                            return () => {};
                        })
            `}
            </code></pre></div>


        </div>
    )
}

export default Useeffect;