const articles = [
    {
        title: "ARRAYS", 
        author: 'Binija Gurung', 
        date: '20/02/2023',
        content: 'An array is a special variable, which can hold more than one value as a list of stored and ordered data. Arrays are resizable and can contain a mix of different data types, properties and values. Arrays are 0 indexed meaning the first element of an array is at index 0, second is at index 1 and so on.'
    },
    {
        title: 'Array Methods', 
        author: 'Binija Gurung', 
        date: '20/02/2023',
        content: 'There are many built-in methods in JavaScript that can be used to manipulate arrays. Here are some of the most commonly used array methods in JavaScript: <i>push(), pop(), shift(), unshift(), splice(), slice(), concat(), indexOf(), forEach(), map(), filter(), reduce()</i>. These are just a few of the many array methods available in JavaScript. Each method has its own specific purpose and can be used to manipulate arrays in different ways.'
    },
    {
        title: 'Push, Pop, Shift and Unshift', 
        author: 'Binija Gurung', 
        date: '20/02/2023',
        content: '<b>push()</b>: Adds one or more elements to the end of an array and returns the new length of the array. <br> <b>pop()</b>: Removes the last element from an array and returns that element.<br> <b>shift()</b>: Removes the first element from an array and returns that element.<br> <b>unshift()</b>: Adds one or more elements to the beginning of an array and returns the new length of the array.'
    },
    {
        title: 'Splice, Slice and Concat', 
        author: 'Binija Gurung', 
        date: '20/02/2023',
        content: '<b>splice()</b>: Adds or removes elements from an array at a specific index.<br> <b>slice()</b>: Returns a new array containing a portion of the original array.<br> <b>concat()</b>: Joins two or more arrays and returns a new array.'
    },
    {
        title: 'IndexOf and ForEach', 
        author: 'Binija Gurung', 
        date: '20/02/2023',
        content: '<b>indexOf()</b>: Returns the first index at which a given element can be found in an array, or -1 if it is not present. <br><b>forEach()</b>: Calls a function for each element in an array.'
    },
    {
        title: 'Map, Filter and Reduce', 
        author: 'Binija Gurung', 
        date: '20/02/2023',
        content: '<b>map()</b>: Creates a new array with the results of calling a provided function on every element in the array. <br><b>filter()</b>: Creates a new array with all elements that pass the test implemented by the provided function.<br> <b>reduce()</b>: Executes a provided function for each value of the array and returns a single value. '
    }
]

const wrapper = document.querySelector('.wrapper')

articles.forEach((article) => {
    const container = document.createElement('div')
    container.classList.add("container")
    wrapper.appendChild(container) //add it inside

    const title = document.createElement('h1')
    title.classList.add("title")
    container.appendChild(title)
    title.innerHTML = article.title

    const date = document.createElement('time')
    date.classList.add("date")
    container.appendChild(date)
    date.innerHTML = article.date


    const content = document.createElement('p')
    content.classList.add("content")
    container.appendChild(content)
    content.innerHTML = article.content

    const author = document.createElement('p')
    author.classList.add("author")
    container.appendChild(author)
    author.innerHTML = article.author

})