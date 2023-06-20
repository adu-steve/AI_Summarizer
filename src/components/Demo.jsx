import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      {/*Search*/}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative-flex justify-center items-center"
          onSubmit={() => {}}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-100 my-3 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value=""
            onChange={() => {}}
            required
            className="url_input peer w-full"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ^
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
