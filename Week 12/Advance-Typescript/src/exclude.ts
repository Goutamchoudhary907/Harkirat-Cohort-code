// Exclude used to exclude some properties from type 

type event='click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<event, 'scroll'> ;

const handleEvent=(event:ExcludeEvent) =>{
    console.log(`Handling event : $(event`);
};
handleEvent('click');

// handleEvent('scroll')    can't do this as scroll is excluded
