import React, { useEffect, useState, useMemo } from "react";
import Sidebar from "./Sidebar";
import Cards from "../Main/Cards";
import FindFreeCoursesandDiscountsoffer from "../Main/FindFreeCoursesandDiscountsoffer";
import Subscribe from "../Main/Subscribe";
import Config from "../../../Config/Config";

const CoursesPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // No category selected by default
  const [selectedLevels, setSelectedLevels] = useState({
    beginner: false,
    intermediate: false,
    advanced: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(9);
  // const navigate = useNavigate();

  useEffect(() => {
    Config.get_enabled_categories()
      .then((res) => {
        // If filtering is needed, process the response
        const filteredCategories = res.filter(
          (category) => category.courses && category.courses.length > 0
        );
        setCategories(filteredCategories);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await axios.get(
  //         API_URLS.Catagory_enabled,
  //         { params: { order: 1 } }
  //       );
  //       if (response.data) {
  //         const data = response.data.filter(
  //           (category) => category.courses && category.courses.length > 0
  //         );
  //         setCategories(data);
  //       } else {
  //         console.error("Failed to fetch categories");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching categories:", error);
  //     }
  //   };
  //   fetchCategories();
  // }, []);

  const handleCategoryChange = (cid) => {
    if (selectedCategory === cid) {
      setSelectedCategory(null); // Deselect the category if it's already selected
    } else {
      setSelectedCategory(cid); // Set the selected category
    }
    setSelectedLevels({
      beginner: false,
      intermediate: false,
      advanced: false,
    });
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handleLevelChange = (level) => {
    setSelectedLevels((prevLevels) => ({
      ...prevLevels,
      [level]: !prevLevels[level], // Toggle the selected level
    }));
  };

  // Get courses of the selected category (if a category is selected)
  const selectedCategoryCourses =
    selectedCategory === null
      ? categories.flatMap((category) => category.courses) // If no category selected, show all courses
      : categories.find((category) => category._id === selectedCategory)
          ?.courses || [];

  // Filter courses based on selected levels
  const filteredCourses = selectedCategoryCourses.filter((course) => {
    if (selectedLevels.beginner && course.course_level === "beginner")
      return true;
    if (selectedLevels.intermediate && course.course_level === "intermediate")
      return true;
    if (selectedLevels.advanced && course.course_level === "advanced")
      return true;
    if (
      !selectedLevels.beginner &&
      !selectedLevels.intermediate &&
      !selectedLevels.advanced
    )
      return true;
    return false;
  });

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const getCategoryNameById = useMemo(
    () => (categoryId) => {
      const category = categories.find((cat) => cat._id === categoryId);
      return category ? category.category_name : "Unknown Category";
    },
    [categories]
  );

  return (
    <>
      <div>
        <div class="w-auto h-auto bg-[#A4DCAA] mb-2 mt-12 lg:mx-12 mx-6 py-3 px-5 rounded-lg shadow-lg border">
          <div class="flex justify-start items-center 2xl:text-[27px] xl:text-[24px] lg:text-[20px] md:text-[16px] text-[11px] font-readex">
            <p class="xl:tracking-[1px]">
              <span class="font-bold"> Explore Our Course:</span> Elevate Your
              IT Skills - Building Tomorrow‘s Tech Innovators
            </p>
          </div>
        </div>
      </div>

      {/* // <!-- sidebar and cards  --> */}
      <div class="h-auto mx-12">
        <div class="flex lg:flex-row flex-col md:justify-start ">
          {/* <!-- sidebar   --> */}

          {/* <Sidebar getCategoryId={getCategoryId}/> */}
          <div className="border-2 w-96">
            <div class=" w-full md:px-0 px-6 bg-[#FFFFFF] p-2 ">
              <div class="flex flex-col px-4 gap-2 pt-8">
                <p class="font-readex font-semibold lg:text-[38px] md:text-[31px] text-[25px] xl:text-[44px] 2xl:text-[51px]">
                  Filter
                </p>
                <p class="font-readex xl:text-[24px] 2xl:text-[27px] lg:text-[20px] md:text-[17px] text-[16px]">
                  Categories
                </p>
                <div class="text-[ 12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  <div class="flex flex-col gap-1">
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category._id} className="border-b pb-2">
                          <div className="flex gap-10 items-center">
                            <label>
                              <input
                                type="checkbox"
                                onChange={() =>
                                  handleCategoryChange(category._id)
                                }
                                checked={selectedCategory === category._id}
                              />
                              <span className="text-[25px] font-urbanist ml-2 cursor-pointer">
                                {category.category_name}
                              </span>
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-4 gap-2 pt-8">
                <p class="font-readex xl:text-[24px] 2xl:text-[27px] lg:text-[20px] md:text-[17px] text-[16px]">
                  Level
                </p>
                <div class="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  {/* <!-- optoins  --> */}
                  <div class="flex flex-col gap-1">
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => handleLevelChange("beginner")}
                        checked={selectedLevels.beginner}
                      />
                      <span className="text-[25px] font-urbanist ml-2 cursor-pointer">
                        Beginner
                      </span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => handleLevelChange("intermediate")}
                        checked={selectedLevels.intermediate}
                      />
                      <span className="text-[25px] font-urbanist ml-2 cursor-pointer">
                        Intermediate
                      </span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => handleLevelChange("advanced")}
                        checked={selectedLevels.advanced}
                      />
                      <span className="text-[25px] font-urbanist ml-2 cursor-pointer">
                        Advanced
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- cards  --> */}
          <div class="card-grid">
            {filteredCourses.length === 0 ? (
              <div className="w-full text-center py-10 text-xl font-bold">
                No courses available for the selected level(s)
              </div>
            ) : (
              currentCourses.map((course) => (
                <Cards
                  course={course}
                  getCategoryNameById={getCategoryNameById}
                />
              ))
            )}
          </div>
          
        </div>
        {filteredCourses.length > 0 && (
          <div className="flex justify-center items-center py-10 my-20">
            <div className="flex items-center space-x-6 text-3xl md:text-4xl lg:text-5xl font-semibold">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`border-r-2 border-black h-16  px-3 ${
                    currentPage === index + 1
                      ? " text-black text-6xl"
                      : " text-gray-500 text-6xl"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <FindFreeCoursesandDiscountsoffer />
      <Subscribe />
    </>
  );
};

export default CoursesPage;
