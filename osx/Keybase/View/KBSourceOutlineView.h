//
//  KBSourceOutlineView.h
//  Keybase
//
//  Created by Gabriel on 2/5/15.
//  Copyright (c) 2015 Gabriel Handford. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "KBAppKit.h"

typedef NS_ENUM (NSInteger, KBSourceViewItem) {
  KBSourceViewItemProfile = 1,
  KBSourceViewItemUsers,
  KBSourceViewItemDevices,
  KBSourceViewItemFolders,
  KBSourceViewItemDebug
};

@class KBSourceOutlineView;

@protocol KBSourceOutlineViewDelegate
- (void)sourceOutlineView:(KBSourceOutlineView *)sourceOutlineView didSelectItem:(KBSourceViewItem)item;
@end

@interface KBSourceOutlineView : YONSView <NSOutlineViewDataSource, NSOutlineViewDelegate>

@property (weak) id<KBSourceOutlineViewDelegate> delegate;
@property (nonatomic, getter=isProgressEnabled) BOOL progressEnabled;

@end
