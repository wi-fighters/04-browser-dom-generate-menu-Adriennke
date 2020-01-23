(() => {
    // grab all the sections and destructure it into an array
    const sections = [...document.querySelectorAll('section')];
    
    // map over them and store their id in a new array
    const ids = sections.map(section => section.id); // home
    const hrefs = ids.map(id => '#' + id);

    // one way...
    const links = hrefs.map(href => `<a href="${href}">${ // # home 
        href.substring(1)[0].toUpperCase() + href.substring(2)
    }</a>`);

    const subtitle = document.querySelector('#subtitle');
    subtitle.innerHTML = 'The best <em>company with the best</em> stuff';

    // the recommended way...
    // CREATE A NEW ELEMENT and anything it will need, like text nodes...

    const link = document.createElement('a');
    link.setAttribute('href', '#home'); // TODO: get the href values with map

    const linkText = document.createTextNode('Home'); // TODO: get link text programmatically

    link.appendChild(linkText);

    // // TARGET THE EXISTING ELEMENT THAT WILL BE ITS PARENT

    const li = document.querySelector('li'); // TODO: create li + parent elements

    // // APPEND CHILD

    li.appendChild(link);




    console.dir(sections);
    console.dir(ids);
    console.dir(hrefs);
    console.dir(links);


    // maybe later...
    // const hrefs = sections.map();       // #home
    // const links = sections.map();
    // const lis = sections.map();

})();