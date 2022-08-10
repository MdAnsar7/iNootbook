import React from "react";

export function Alert(props) {
  const capatilize = (word) => {
    if(word === 'danger'){
      word = "Error";
    }
    
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          // className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{capatilize(props.alert.type)}</strong>:
          {capatilize(props.alert.msg)}
        </div>
      )}
    </div>
  );
}

