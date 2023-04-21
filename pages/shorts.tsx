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

export default function Shorts({ shorts }: { shorts: Short[] }) {
    const seo = { title: 'Shorts', description: 'Shorter writing.' };

    return (
        <Layout {...seo}>
            <h1>Shorts</h1>
            <p className="Shorts-intro">This is a new page I'm trying out. I'll put shorter content here; thoughts and ideas that aren't full posts.
            </p>
            <main>
                {
                    shorts
                        .map((short) => <div key={short.id} id={short.id.toString()} className="short">
                            <p>
                                <a className="short-date-link" href={`#${short.id}`}>{(new Date(short.id)).toDateString()}</a>
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
                            >{short.content}</Markdown>
                            <Like id={`short-${short.id}`} />
                            <hr />
                        </div>)
                }
            </main>
            <style jsx>{`
            .short-intro {
                padding-bottom: 24px;
            }
            .short-date-link {
                color: var(--light-text);
                margin-right: 20px;
            }
            .short-date-link:hover {
                color: var(--text);
            }
            `}</style>
        </Layout>
    )
}
