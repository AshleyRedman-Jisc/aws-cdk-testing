#!/usr/bin/env node
import 'source-map-support/register';

import * as cdk from 'aws-cdk-lib';
import { AwsCdkTestingStack } from '../lib/aws-cdk-testing-stack';

const app = new cdk.App();

new AwsCdkTestingStack(app, 'AwsCdkTestingStack', {
    description: 'Testing AWS CDK',
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    }

    /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
