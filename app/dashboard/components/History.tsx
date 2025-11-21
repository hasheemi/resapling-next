import React, { PureComponent, useState, useEffect } from "react";

export function History () {
  const [change, setChange] = useState<number>(0);
  useEffect(() => {
    if (LeaderBoardItem.length > 0) {
      const lastItem = LeaderBoardItem[LeaderBoardItem.length - 1];
      setChange(lastItem.amount);
    }
  }, [LeaderBoardItem]);
  useEffect(() => {
  console.log("Change updated:", change);
}, [change]);
    return (
      <div className="w-full card card-xs bg-white p-2">
        <span className="text-xl font-bold p-2">History</span>
        {LeaderBoardItem.map((item, index) => (
          <div key={index}>
            <div className="rounded-xl w-full flex flex-row items-center justify-center hover:bg-base-300 transition duration-150 p-2">
              <p>{item.date} | </p>
              <div className="px-4 flex-1 flex justify-between items-center">
                <span className="">Rp. {item.amount}</span>
                { change > item.amount ? 
                <div className="badge my-1 badge-error">{item.change}</div> : 
                <div className="badge my-1 badge-success">{item.change}</div>
                }
              </div>
            </div>
            {index != LeaderBoardItem.length - 1 && (
              <div className="h-[0.5] rounded mx-4 bg-base-300"></div>
            )}
          </div>
        ))
        }
      </div>
    );
}

const LeaderBoardItem = [
  {
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Smith",
    amount: 100000,
    change: "+10%",
    date: "2023-10-01",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Smith",
    amount: 90000,
    change: "+10%",
    date: "2023-10-02",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Smith",
    amount: 180000,
    change: "+10%",
    date: "2023-10-03",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Smith",
    amount: 2000,
    change: "+10%",
    date: "2023-10-04",
  },
];

export default History;
