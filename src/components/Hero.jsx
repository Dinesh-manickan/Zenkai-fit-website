import Button from "./Button";
import zoroImage from "../assets/zoro.png";
// import zoroImage from "../assets/Zoro.jpeg";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left max-w-[1600px] w-full mx-auto p-4 gap-10">
      <div className="flex flex-col gap-4 lg:w-1/2 lg:text-left">
        <p className="text-xl font-medium">IT'S TIME TO UNLEASH</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Zen<span className="text-blue-400">Kai</span>
        </h1>
        <p className="text-sm md:text-base font-light">
          Prepare yourself to ascend to new heights of strength and power as you
          embrace the path to becoming
          <span className="text-blue-400 font-medium">
            "Unbelievably Swolenormous"
          </span>
          . Face every challenge head-on and become the local
          <span className="text-blue-400 font-medium">"Mass Monstrosity"</span>,
          equipped with the determination to conquer all obstacles, even if it
          means reimagining your limits.
        </p>

        <Button
          func={() => {
            window.location.href = "#generate";
          }}
          text={"Accept & Begin"}
        />
      </div>
      <div className="lg:w-1/2 flex justify-end sm:justify-center">
        <img
          src={zoroImage}
          alt="Hero Image"
          className="object-cover max-w-full h-auto"
        />
      </div>
    </div>
  );
}
