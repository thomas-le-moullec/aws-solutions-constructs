/**
 *  Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance
 *  with the License. A copy of the License is located at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions
 *  and limitations under the License.
 */

// Imports
import { App, Stack } from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as defaults from "@aws-solutions-constructs/core";
import { CloudFrontToS3 } from "../lib";

// Setup
const app = new App();
const stack = new Stack(app, 'test-cloudfront-s3-existing-bucket-stack');

let mybucket: s3.Bucket;
[mybucket] = defaults.buildS3Bucket(stack, {});

new CloudFrontToS3(stack, 'test-cloudfront-s3', {
    existingBucketObj: mybucket
});

// Synth
app.synth();