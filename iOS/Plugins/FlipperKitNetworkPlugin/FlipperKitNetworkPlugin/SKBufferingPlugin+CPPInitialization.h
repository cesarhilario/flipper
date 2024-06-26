/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#ifdef FB_SONARKIT_ENABLED
#pragma once

#import <iostream>
#import <memory>
#import "SKBufferingPlugin.h"
#import "SKDispatchQueue.h"

struct CachedEvent {
  NSString* method;
  NSDictionary<NSString*, id>* sonarObject;
};

@interface SKBufferingPlugin (CPPInitialization)

- (instancetype)initWithVectorEventSize:(NSUInteger)size
                  connectionAccessQueue:
                      (std::shared_ptr<facebook::flipper::DispatchQueue>)
                          connectionAccessQueue;
- (instancetype)initWithDispatchQueue:
    (std::shared_ptr<facebook::flipper::DispatchQueue>)queue;

@end

#endif
