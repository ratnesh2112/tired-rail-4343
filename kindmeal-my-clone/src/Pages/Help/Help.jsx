import {
    Container,
    Image,
    Flex,
    Text,
    Stack,
  } from '@chakra-ui/react';


  
 
  
  export default function Help() {
    return (
      <Container maxW={'6xl'} py={10}>
        
        <Flex columns={{ base: 1, md: 2 }} spacing={1}>
        <Flex >
            <Stack 
              w={"250px"}
              h={"250px"}
              gap={"20px"}>
            <Image
              rounded={'md'}
              w={"200px"}
              h={"250px"}
              alt={'feature image'}
              src={'https://www.kindmeal.my/images/join_normal.png'}
              objectFit={'cover'}
            />
             <Image
              rounded={'md'}
              w={"200px"}
              h={"250px"}
              alt={'feature image'}
              src={'https://www.kindmeal.my/images/join_shop.png'}
              objectFit={'cover'}
            />
             <Image
              rounded={'md'}
             w={"200px"}
              h={"250px"}
              alt={'feature image'}
              src={'https://www.kindmeal.my/images/icon-megaphone.png'}
              objectFit={'cover'}
            />
             <Image
              rounded={'md'}
             w={"200px"}
              h={"250px"}
              alt={'feature image'}
              src={'https://www.kindmeal.my/images/about_us.png'}
              objectFit={'cover'}
            />
             <Image
              rounded={'md'}
             w={"200px"}
              h={"250px"}
              alt={'feature image'}
              src={'https://www.kindmeal.my/images/about_hero.png'}
              objectFit={'cover'}
            />
             <Image
              rounded={'md'}
             w={"200px"}
              h={"250px"}
              alt={'feature image'}
              src={'https://www.kindmeal.my/images/contact.png'}
              objectFit={'cover'}
            />
            </Stack>
          </Flex>
          
          <Stack    marginLeft={"40px"} spacing={3}>
            
            <Text textAlign={"left"} fontSize={"25px"}> General Help </Text>
            <Text  color={'gray.500'} textAlign={"left"} fontSize={'lg'}>
            Wish to find out more on how to use KindMeal? Please check out our frequently-asked questions below. If you are unable to 
            find your answer here, please contact us for further assistance.
            </Text>

            <Text textAlign={"left"} fontSize={"25px"}> What is KindMeal? </Text>
            <Text   textAlign={"left"} color={'gray.500'} fontSize={'lg'}>
            KindMeal is Malaysia's (and possibly the world's!) pioneering
             meat-free lifestyle platform. We provide an effective platform 
             to promote compassionate dining in a fun and effective way, that 
             would allow you to save precious animal lives, improve your health, enjoy a 
            cleaner environment and of course, save your hard-earned money.
            </Text>
            <Text textAlign={"left"} fontSize={"25px"}>What is Meat-Free?</Text>
            <Text textAlign={"left"} color={'gray.500'} fontSize={'lg'}>
            Meat-free means that the food does not contain any meat, or ingredients derived from meat. However, it may contain some elements that people of certain diet do not consume, such as eggs, dairy / milk, or alcohol.
             Please refer to the details within each specific shop / deal for further information.
            </Text>

            <Text textAlign={"left"} fontSize={"25px"}>How do I sign up to KindMeal? Is it free?</Text>
            <Text textAlign={"left"} color={'gray.500'} fontSize={'lg'}>
            Yes, it is absolutely free. To join our community of food lovers and grab awesome deals, please sign up here.

            If you are a merchant that wish to promote your business for FREE, please proceed to our Businesses Page.

            </Text>

            <Text textAlign={"left"} fontSize={"25px"}>How do I get a KindMeal coupon?</Text>
            <Text textAlign={"left"} color={'gray.500'} fontSize={'lg'}>
            Yes, it is absolutely free. To join our community of food lovers and grab awesome deals, please sign up here.
            If you are a merchant that wish to promote your business for FREE, please proceed to our Businesses Page.
            </Text>


            <Text textAlign={"left"} fontSize={"25px"}>What is KindWords?</Text>
            <Text textAlign={"left"} color={'gray.500'} fontSize={'lg'}>
            A Username is a nickname exclusively used to identify your profile.
             It will be used to access your Public Page, such as https://KindMeal.my/MyUsername,
             and it will also be displayed when you share KindMoments, comments and reviews.
            </Text>



            <Text textAlign={"left"} fontSize={"25px"}>How do I use my KindMeal LiveCoupon?</Text>
            <Text textAlign={"left"} color={'gray.500'} fontSize={'lg'}>
            Just browse to a deal you like, select the corresponding outlet location (if the restaurant has multiple locations),
             then click on Get Coupon. Please note that the outlet location cannot be changed after the coupon is obtained.

            Each member is limited to 5 active coupons only. You must use the coupons before you can obtain additional ones.
            Unused coupons will automatically expire upon reaching its due date.
            </Text>



            <Text textAlign={"left"} fontSize={"25px"}>What if I don't have a mobile device or Internet connection, can I use a Print Coupon?</Text>
            <Text textAlign={"left"} color={'gray.500'} fontSize={'lg'}>
            Once a coupon is received, you can access the LiveCoupon and use it via one of the following ways.
             An Internet connection is required.
     At KindMeal website, under Account - My Coupons section
       With our KindMeal mobile app, under Deals - My Coupons section
      You should only activate the LiveCoupon when you are at the restaurant,
       and upon informing the merchant. Some merchants may require that you activate it during the
        ordering process,
 while some will be during the payment process. Please inform the merchant first when you are ordering 
 to ensure they are aware of your KindMeal LiveCoupon.

Once an active LiveCoupon is loaded, you will see a timer counting down the time remaining to use it. 
To activate it, click on Use LiveCoupon. Please ensure that you only activate it upon the request of the merchant.
 Activating it ahead
            </Text>



            <Text textAlign={"left"} fontSize={"25px"}>What is a Print Coupon's Usage Delay?</Text>
            <Text textAlign={"left"} color={'gray.500'} fontSize={'lg'}>
            Some merchants may not have the facilities available to verify Print Coupons instantly,
             so they may impose a Usage Delay of a certain number of days to first print out a cross-checking reference list. 
             If there is a 3-Day delay, it means that you can only use the Print Coupon 3 days after obtaining the coupon.

             You may wish to check with the merchant first before using it. We strongly suggest using a LiveCoupon instead,
              which is immediate with no usage delays.
            </Text>
            
          </Stack>
         
        </Flex>
      </Container>
    );
  }