import React from 'react'
import links from '../json/links.json'

function LinkList() {
  return (
    <main className="flex px-3 sm:px-0">
      <ul className="w-full md:w-4/5 lg:w-3/6 mx-auto space-y-4">
        {links.map(link => (
          <li key={link.title}>
            <a rel="noreferrer" 
              className={"relative transition duration-200 font-bold bg-yellow-400 border-yellow-500 border-2 hover:bg-yellow-500 py-4 w-100 block text-center text-gray-700 hover:text-white-400 rounded-lg pl-12 p-4 md:px-12 " + (link.show ? 'false' : 'disable')}
              href={link.url}
              target="_blank"
            >
              <span className="text-3xl absolute left-0 top-0 bottom-0 pl-3 flex items-center">{link.emoji}</span>
              <span>{link.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default LinkList;
