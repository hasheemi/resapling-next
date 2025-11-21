import React, { PureComponent } from "react";

export class LeaderBoard extends PureComponent {
  render() {
    return (
      <div className="w-full card card-xs bg-white p-2">
        <span className="text-xl font-bold p-2">LeaderBoard</span>
        {LeaderBoardItem.map((item, index) => (
          <div key={index}>
            <div className={`rounded-t-lg w-full flex flex-row items-center justify-center transition duration-150 p-2 ${index == 0 ? `hover:bg-green-500` : index == 1 ? `hover:bg-green-400` : index == 2 ? `hover:bg-green-300` : `hover:bg-green-100`}`}>
              <div className="text-4xl font-thin opacity-30 tabular-nums mr-4">{index+1}</div>
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src={item.image} />
                </div>
              </div>
              <div className="px-4 flex-1 flex flex-col items-start">
                <span className="">{item.name} : {item.amount}</span>
                <div className="badge my-1 badge-success">{item.change}</div>
              </div>
            </div>
            {index != LeaderBoardItem.length - 1 && (
              <div className="h-[0.5] rounded mx-4 bg-base-300"></div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

const LeaderBoardItem = [
  {
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Smith",
    amount: "Rp100.000",
    change: "+10%",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Smith",
    amount: "Rp100.000",
    change: "+10%",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Smith",
    amount: "Rp100.000",
    change: "+10%",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Smith",
    amount: "Rp100.000",
    change: "+10%",
  },
];

export default LeaderBoard;
