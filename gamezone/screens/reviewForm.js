import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import * as yup from "yup";
import FlatButton from "../shared/button";

const reviewSchema = yup.object({
  title: yup.string().required().min(4).max(50),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "rating must be a number 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const ReviewForm = ({ addReview }) => {
  const [bColor, setBColor] = useState("");
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values) => {
          console.log(values);
          addReview({
            title: values.title,
            body: values.body,
            rating: values.rating,
            key: Math.random().toString(),
          });
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={{ ...globalStyles.input /* borderBottomColor: bColor */ }}
              placeholder="Review Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onFocus={() => setBColor("#F72119")}
              //   onBlur={() => setBColor("#ddd")}
              onBlur={props.handleBlur("title")} //show the text error on blur
            />
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              multiline
              minHeight={80} // bigger than the others cs it is the BODY
              style={{ ...globalStyles.input /* borderBottomColor: bColor */ }}
              placeholder="Review Body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onFocus={() => setBColor("#F72119")}
              //   onBlur={() => setBColor("#ddd")}
              onBlur={props.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              style={{ ...globalStyles.input /* borderBottomColor: bColor */ }}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType={"numeric"}
              onFocus={() => setBColor("#F72119")}
              //   onBlur={() => setBColor("#ddd")}
              onBlur={props.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>
            <FlatButton onPress={props.handleSubmit} text={"submit"} />
            {/* <Button
              title="submit"
              color="maroon"
              onPress={props.handleSubmit}
            /> */}
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({});

