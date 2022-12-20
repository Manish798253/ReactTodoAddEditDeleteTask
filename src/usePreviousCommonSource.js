import { useRef,useEffect } from "react";

export default function usePrevious(value) {

    // var obj={a:1,b:{c:1,d:1}};
    // console.log(obj);
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }