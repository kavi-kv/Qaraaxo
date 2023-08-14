import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Layout(props) {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (location.pathname != "/" && location.pathname!= "/registration") setShowHeader(true);
    else setShowHeader(false);
  }, []);

  return <>{showHeader && props.children}</>;
}
