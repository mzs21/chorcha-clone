const CardOne = () => {
  return (
    <div className="cardOne-design">
      <p className="text-start">নিষেকের কত দিনের মধ্যে ইমপ্ল্যান্টেশন ঘটে?</p>
      <div className="cardOneButton-layout ">
        <button className="cardOne-button wrong-answer">১-৩ দিন</button>
        <button className="cardOne-button wrong-answer">১২-১৬ দিন</button>
        <button className="cardOne-button correct-answer">৬-৯ দিন</button>
        <button className="cardOne-button wrong-answer">১০-১৬ দিন</button>
      </div>
    </div>
  );
};

export default CardOne;
