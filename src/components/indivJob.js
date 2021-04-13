import React, {useState, useEffect, useRef} from 'react';

const IndivJob = (props) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const domRefCurrent = domRef.current
    observer.observe(domRefCurrent);
    return () => observer.unobserve(domRefCurrent);
  }, []);
    return(
    <div
        className={`job fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
    >
      <h2> {props.title} @ <a href = {props.link} target = "_blank" rel = "noopener noreferrer" className = "spanlink"><span> {props.location}</span></a></h2>
      <h3> {props.start} {props.end? "-" : ""} {props.end}</h3>
      {props.intro ? 
      (
        <div>
            <p>{props.intro}<br/> </p>
                <ul className = "jobList">
                    <li> {props.duty1}</li>
                    <li>{props.duty2}</li>
                    <li>{props.duty3}</li>
                </ul>
            <p>{props.extra}</p>
        </div>
      )
      : null
}
    </div>
    );
}

export default IndivJob;