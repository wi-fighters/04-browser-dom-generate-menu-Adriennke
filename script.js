(() => {
    // The general workflow is:
    // create an element
    // target its parent
    // prepend (or append) it as a child
    
    // DO THE SETUP
    
    // grab the closest EXISTING parent already in the DOM (on the page)
    const body = document.body;
    
    // we're creating a list based on the number of sections, so grab those...
    
    // grab all the sections and destructure it into an array
    const sections = [...document.querySelectorAll('section')];
    
    // map over them and store their id in a new array
    const ids = sections.map(section => section.id); // home
    
    // DO THE HARD WORK
    
    // create a new thing
    const header = document.createElement('header');
    
    const ul = document.createElement('ul');
    
    // Which tool do we use to iterate over these steps?
    // We don't need a new array, so forEach works for us
    
    ids.forEach(id => {
        const li = document.createElement('li');
    
        const link = document.createElement('a');
        link.setAttribute('href', '#home'); // TODO: get this programmatically
        // Maybe use something like...
        // const hrefs = ids.map(id => '#' + id);
    
        const linkText = document.createTextNode('Home'); // TODO: get this programmatically
    
        link.prepend(linkText);
    
        li.prepend(link);
    
        ul.prepend(li);
    });
        
    header.prepend(ul);
    
    // SEE THE RESULT
    
    // Once you're built the whole subtree in memory,
    // Add it to the DOM (define the relationship between the two things)
    body.prepend(header);    
})();
