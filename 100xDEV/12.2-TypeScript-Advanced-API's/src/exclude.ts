type EventType = 'click' | 'mouseover' | 'mouseout';
type ExcludeEventType = Exclude<EventType, 'click'>; //scroll |mousehover

const handleEvent = (event: ExcludeEventType) => {
    console.log(event);
}

handleEvent('mouseover'); // Valid