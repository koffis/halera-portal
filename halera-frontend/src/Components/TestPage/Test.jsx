import React from "react";
import s from './Test.module.css'

const Test = (props) => {
    return (
        <div>
            <div className={s.header}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </div>
            <div className={s.languagesPlace}>
                <div className={s.languageItem}>
                    <div className={s.languageImage}>
                        <i className="fab fa-python"></i>
                    </div>
                    <div className={s.languageInfo}>
                        <h5>Phyton</h5>
                        <p>
                            Python is powerful... and fast, plays well with others, runs everywhere;
                            is friendly & easy to learn ,is Open.
                        </p>
                    </div>
                    <div className={s.passTest}>
                        <button>Try yourself</button>
                    </div>
                </div>
                <div className={s.languageItem}>
                    <div className={s.languageImage}>
                        <i className="fab fa-js-square"></i>
                    </div>
                    <div className={s.languageInfo}>
                        <h5>JavaScript</h5>
                        <p>
                            JavaScript is a dynamic computer programming language.
                            It is lightweight and most commonly used as a part of web pages
                        </p>
                    </div>
                    <div className={s.passTest}>
                        <button>Try yourself</button>
                    </div>
                </div>
                <div className={s.languageItem}>
                    <div className={s.languageImage}>
                        <i className="fab fa-java"></i>
                    </div>
                    <div className={s.languageInfo}>
                        <h5>Java</h5>
                        <p>
                            Java is a general-purpose programming language that is class-based, object-oriented,
                            and designed to have as few implementation dependencies as possible.
                        </p>
                    </div>
                    <div className={s.passTest}>
                        <button>Try yourself</button>
                    </div>
                </div>

                <div className={s.languageItem}>
                    <div className={s.languageImage}>
                        <i className="icon-csharp"></i>
                    </div>
                    <div className={s.languageInfo}>
                        <h5>C#</h5>
                        <p>
                            C# is a hybrid of C and C++, it is a Microsoft programming language developed to compete
                            with Sun's Java language
                        </p>
                    </div>
                    <div className={s.passTest}>
                        <button>Try yourself</button>
                    </div>
                </div>
                <div className={s.languageItem}>
                    <div className={s.languageImage}>
                        <i className="icon-cplusplus"></i>
                    </div>
                    <div className={s.languageInfo}>
                        <h5>C++</h5>
                        <p>
                            C++ is a general-purpose object-oriented programming (OOP) language, developed by Bjarne Stroustrup
                        </p>
                    </div>
                    <div className={s.passTest}>
                        <button>Try yourself</button>
                    </div>
                </div>
                <div className={s.languageItem}>
                    <div className={s.languageImage}>
                        <i className="icon-ruby"></i>
                    </div>
                    <div className={s.languageInfo}>
                        <h5>Ruby</h5>
                        <p>
                            A dynamic, open source programming language with a focus on simplicity and productivity.                         </p>
                    </div>
                    <div className={s.passTest}>
                        <button>Try yourself</button>
                    </div>
                </div>
            </div>
        </div>


    )
};

export default Test;