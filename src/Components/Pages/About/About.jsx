import Contacts from "./Contacts";
import Location from "./Location";
import Policy from "./Policy";
import Service from "./Service";

const About = () => {
  return (
    <div>
      <div className="sticky top-[56px] text-center md:top-[64px] grid grid-cols-4 ">
        <input id="r1" className="peer/r1 hidden " type="radio" name="d" />
        <label
          className="bg-gray-100 hover:bg-gray-300 peer-checked/r1:bg-gray-300"
          htmlFor="r1"
        >
          Locations
        </label>
        <input id="r2" className="peer/r2 hidden" type="radio" name="d" />
        <label
          className="bg-gray-100 hover:bg-gray-300 peer-checked/r2:bg-gray-300"
          htmlFor="r2"
        >
          Services
        </label>
        <input id="r3" className="peer/r3 hidden" type="radio" name="d" />
        <label
          className="bg-gray-100 hover:bg-gray-300 peer-checked/r3:bg-gray-300"
          htmlFor="r3"
        >
          Policies
        </label>
        <input id="r4" className="peer/r4 hidden " type="radio" name="d" />
        <label
          className="bg-gray-100 hover:bg-gray-300 peer-checked/r4:bg-gray-300"
          htmlFor="r4"
        >
          Contacts
        </label>

        {/* description section */}

        <div className="hidden col-start-1 ml-0 pl-0 col-end-10 text-start peer-checked/r1:block ">
          <Location></Location>
        </div>
        <div className="hidden col-start-1 ml-0 pl-0 col-end-10 text-start peer-checked/r2:block ">
          <Service></Service>
        </div>
        <div className="hidden col-start-1 ml-0 pl-0 col-end-10 text-start peer-checked/r3:block ">
          <Policy></Policy>
        </div>
        <div className="hidden col-start-1 ml-0 pl-0 col-end-10 text-start peer-checked/r4:block ">
          <Contacts></Contacts>
        </div>
      </div>
    </div>
  );
};

export default About;
