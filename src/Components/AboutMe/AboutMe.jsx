import React from "react";

function AboutMe() {
    return (
        <section id="AboutMe" className="min-h-screen pt-28 p-5">
            <h2 className="text-2xl text-Text font-bold">Front-End Web Development</h2>
            <div className="flex justify-end">
                <a href="" className="text-white p-2 bg-red-700 rounded-lg my-4 block w-40 text-center shadow-sm shadow-white">Descargar C.V</a>
            </div>
            <div className="flex justify-center my-4">
                <img src="https://placehold.co/250x250" alt="i,am" className="rounded-full"/>
            </div>
            <div>
                <h3 className="text-white">Diego Ramírez de Diego</h3>
                <p className="text-blue-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor aperiam, natus corrupti dignissimos recusandae eligendi ratione a ea unde assumenda, mollitia pariatur quidem! Ipsam illo recusandae officiis doloribus vitae?</p>
            </div>
        </section>
    );
};


export { AboutMe };