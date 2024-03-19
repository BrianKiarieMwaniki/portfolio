import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentSection } from "../components/scroll/scrollSlice";

export const useDispatchSectionInView = (
  isInView: boolean,
  sectionName: "hero" | "about" | "experience" | "skills" | "projects" | "contact"
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInView) {
      dispatch(setCurrentSection(sectionName));
    }
  }, [dispatch, isInView, sectionName]);
};
