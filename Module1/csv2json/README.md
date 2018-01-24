# csv2json
Node.js script that converts a given csv file into a JSON file. The 1st row of the CSV file acts as the keys/properties of the JSON object and the rest of the fields act as values.

# Submission questions
1. I decided to use the package [csvtojson](https://www.npmjs.com/package/csvtojson) since it already does what I needed to do, and probably better than the basic implementation I would have done.
2. To test that the code works as intented I checked the output and then I would perform a `diff` between my result and the result given [here](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/49802b4bc23bb76c0a1eb9bff4178d55/asset-v1:Microsoft+DEV283x+2T2017+type@asset+block/customer-data-solution.json). These results differ because of the line endings used.
