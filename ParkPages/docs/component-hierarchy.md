## Component Hierarchy

**HomeContainer**
- HomeHeaderComponent
  + AuthFormContainer
  + Logo
- SearchComponent
- FeaturedParksComponent
  + FeaturedParksIndexItemComponent

**AuthFormContainer**
 - Sign Up
 - Log In

**SearchResultsContainer**
- MainHeaderComponent
  + AuthFormContainer
  + Logo
  + Search Bar
- ParksIndexComponent
  + ParkComponent
- MapComponent
- NewParkComponent

**ParkContainer**
- MainHeaderComponent
- ParkComponent
- ImagesIndexComponent
- ReviewsIndexComponent
  + ReviewIndexItemComponent
- MapComponent
- NewParkComponent
- NewReviewComponent

**ParkFormContainer**
- MainHeaderComponent
- ParkFormComponent

**ReviewFormContainer**
- MainHeaderComponent
- ParkFormComponent
- ReviewFormComponent

## Routes

|Path   | Component   |
|-------|-------------|
| "/home" | "HomeContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/search" | "SearchResultsContainer" |
| "/parks/:id" | "ParkContainer" |
| "/parks/new" | "ParkFormContainer" |
| "/parks/:id/review" | "ReviewFormContainer" |
