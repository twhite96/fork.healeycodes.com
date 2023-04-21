import Markdown from "markdown-to-jsx";
import React from "react";
import Code from "../components/code";
import Layout from "../components/layout";
import Like from "../components/like";
import { getAllShorts, Short } from "../lib/shorts";


export async function getStaticProps() {
    const Shorts = getAllShorts()
    return {
        props: {
            Shorts
        },
    };
}

export default function Shorts({ Shorts }: { Shorts: Short[] }) {
    const seo = { title: 'Shorts', description: 'Shorter writing.' };

    return (
        <Layout {...seo}>
            <h1>Shorts</h1>
            <p className="Shorts-intro">This is a new page I'm trying out. I'll put shorter content here; thoughts and ideas that aren't full posts.
            </p>
            <main>
                {
                    Shorts
                        .map((Short) => <div key={Short.id} id={Short.id.toString()} className="Short">
                            <p>
                                <a className="Short-date-link" href={`#${Short.id}`}>{(new Date(Short.id)).toDateString()}</a>
                            </p>
                            <Markdown
                                options={{
                                    createElement(type, props, children) {
                                        if (type === "code" && props.className) {
                                            const language = props.className.replace("lang-", "");
                                            return <Code children={children} language={language} />;
                                        }
                                        return React.createElement(type, props, children);
                                    },
                                }}
                            >{Short.content}</Markdown>
                            <Like id={`Short-${Short.id}`} />
                            <hr />
                        </div>)
                }
            </main>
            <style jsx>{`
            .Shorts-intro {
                padding-bottom: 24px;
            }
            .Short-date-link {
                color: var(--light-text);
                margin-right: 20px;
            }
            .Short-date-link:hover {
                color: var(--text);
            }
            `}</style>
        </Layout>
    )
}
