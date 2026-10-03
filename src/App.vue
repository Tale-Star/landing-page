<script setup lang="ts">
import LandingNavbar from '@/components/LandingNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import ProblemsSection from '@/components/ProblemsSection.vue'
import SegmentsSection from '@/components/SegmentsSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import StepsSection from '@/components/StepsSection.vue'
import MobileAppSection from '@/components/MobileAppSection.vue'
import FinalCtaSection from '@/components/FinalCtaSection.vue'
import LandingFooter from '@/components/LandingFooter.vue'
</script>

<template>
  <LandingNavbar />
  <main>
    <HeroSection />
    <ProblemsSection />
    <SegmentsSection />
    <FeaturesSection />
    <StepsSection />
    <MobileAppSection />
    <FinalCtaSection />
  </main>
  <LandingFooter />
</template>
